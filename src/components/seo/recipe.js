/**
 * Pulls ingredients and instructions out of a recipe's markdown for the
 * Recipe structured data.
 *
 * Recipes are written freely in the CMS, so this only reads the shapes that
 * are unambiguous and returns nothing for the rest:
 * - ingredients: the items of the last bullet list before the instructions
 * - instructions: what follows a "Modo de preparo" label, or the paragraph
 *   right after the ingredient list when there is no label
 */

const INSTRUCTIONS_LABEL = /modo de preparo\**\s*:?\**\s*/i
const LIST_ITEM = /^\s*[*-]\s+(.*)$/
// footnotes and hashtags that close a recipe ("*dica: ...", "#semglúten")
const NOTE = /^\\?[*#]/

const toPlainText = markdown =>
  markdown
    .replace(/\[([^\]]*)\]\([^)]*\)/g, `$1`)
    .replace(/[*_\\]/g, ``)
    .replace(/\p{Extended_Pictographic}️?/gu, ``)
    .replace(/\s+/g, ` `)
    .trim()

const getParagraphs = markdown =>
  markdown
    .split(/\n\s*\n/)
    .map(paragraph => paragraph.trim())
    .filter(Boolean)

const getListItems = paragraph =>
  paragraph
    .split(`\n`)
    .map(line => line.match(LIST_ITEM))
    .filter(Boolean)
    .map(match => match[1])

const getIngredients = paragraphs => {
  const lists = paragraphs.map(getListItems).filter(items => items.length > 0)
  const items = lists[lists.length - 1] || []

  return (
    items
      // a single item listing everything: "2 ovos + 6 colheres de mel + ..."
      .flatMap(item => item.split(/\s\+\s/))
      .map(toPlainText)
      .filter(Boolean)
  )
}

const getInstructions = paragraphs => {
  const labelIndex = paragraphs.findIndex(paragraph =>
    INSTRUCTIONS_LABEL.test(paragraph)
  )

  if (labelIndex >= 0) {
    const sameParagraph = toPlainText(
      paragraphs[labelIndex].split(INSTRUCTIONS_LABEL)[1] || ``
    )

    if (sameParagraph) {
      return sameParagraph
    }

    // label on a line of its own: the steps are the paragraphs below it
    const rest = paragraphs.slice(labelIndex + 1)
    const end = rest.findIndex(paragraph => NOTE.test(paragraph))

    return toPlainText(rest.slice(0, end < 0 ? rest.length : end).join(` `))
  }

  const listIndex = paragraphs
    .map(paragraph => getListItems(paragraph).length > 0)
    .lastIndexOf(true)
  const afterList = listIndex >= 0 ? paragraphs[listIndex + 1] : undefined

  return afterList ? toPlainText(afterList) : ``
}

export const parseRecipe = (markdown = ``) => {
  const paragraphs = getParagraphs(markdown)
  const labelIndex = paragraphs.findIndex(paragraph =>
    INSTRUCTIONS_LABEL.test(paragraph)
  )
  const beforeInstructions =
    labelIndex >= 0 ? paragraphs.slice(0, labelIndex) : paragraphs

  return {
    ingredients: getIngredients(beforeInstructions),
    instructions: getInstructions(paragraphs),
  }
}
