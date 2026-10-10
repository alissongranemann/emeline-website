/**
 * schema.org structured data (JSON-LD) for each kind of page.
 *
 * See: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
 */

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_NUMBER,
  EMAIL,
} from "../../config/variables"

const LANGUAGE = "pt-BR"

const SPECIALTIES = [
  "Nutrição clínica",
  "Nutrição funcional",
  "Nutrição esportiva",
  "Nutrição estética",
  "Saúde da mulher",
  "Reeducação alimentar",
  "Emagrecimento",
]

const CITIES = ["Araranguá", "Curitibanos", "Lages"]

const personId = siteUrl => `${siteUrl}/#emeline-abreu`

// short form for bylines; the home page carries the full profile
const getAuthor = siteUrl => ({
  "@type": "Person",
  "@id": personId(siteUrl),
  name: "Emeline Abreu",
  jobTitle: "Nutricionista",
  url: `${siteUrl}/`,
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
})

const getPerson = siteUrl => ({
  ...getAuthor(siteUrl),
  description:
    "Nutricionista (CRN 10 4569) formada pela Universidade Federal de Santa Catarina, pós-graduada em Nutrição Clínica Funcional.",
  telephone: PHONE_NUMBER,
  email: EMAIL,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade Federal de Santa Catarina",
    sameAs: "https://ufsc.br",
  },
  knowsAbout: SPECIALTIES,
  workLocation: CITIES.map(name => ({
    "@type": "City",
    name,
    containedInPlace: {
      "@type": "State",
      name: "Santa Catarina",
    },
  })),
})

const getWebsite = ({ siteUrl, siteTitle, siteDescription }) => ({
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: `${siteUrl}/`,
  name: siteTitle,
  description: siteDescription,
  inLanguage: LANGUAGE,
  publisher: { "@id": personId(siteUrl) },
})

// trail: [{ name, url }], from the home page down to the current page
const getBreadcrumbs = trail => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map(({ name, url }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: url,
  })),
})

const getContentFields = ({
  siteUrl,
  url,
  title,
  description,
  image,
  date,
}) => ({
  name: title,
  description,
  image: [image],
  url,
  inLanguage: LANGUAGE,
  author: getAuthor(siteUrl),
  ...(date && { datePublished: date }),
})

const getBlogPosting = page => ({
  "@type": "BlogPosting",
  ...getContentFields(page),
  headline: page.title,
  publisher: getAuthor(page.siteUrl),
  mainEntityOfPage: { "@type": "WebPage", "@id": page.url },
})

const getRecipe = page => {
  const { category, ingredients = [], instructions } = page.recipe || {}

  return {
    "@type": "Recipe",
    ...getContentFields(page),
    ...(category && { recipeCategory: category }),
    ...(ingredients.length > 0 && { recipeIngredient: ingredients }),
    ...(instructions && { recipeInstructions: instructions }),
  }
}

const getBook = page => ({
  "@type": "Book",
  ...getContentFields(page),
  bookFormat: "https://schema.org/EBook",
})

const CONTENT_BUILDERS = {
  post: getBlogPosting,
  recipe: getRecipe,
  ebook: getBook,
}

/**
 * `type` is "home", "website" (listings and other plain pages) or one of the
 * content types; `section` is the listing a content page belongs to.
 */
export const getStructuredData = page => {
  const { type, siteUrl, url, title, section } = page
  const home = { name: "Início", url: `${siteUrl}/` }

  if (type === "home") {
    return [getWebsite(page), getPerson(siteUrl)]
  }

  const buildContent = CONTENT_BUILDERS[type]
  const trail = [
    home,
    ...(section
      ? [{ name: section.name, url: `${siteUrl}${section.path}` }]
      : []),
    { name: title, url },
  ]

  return [getBreadcrumbs(trail), ...(buildContent ? [buildContent(page)] : [])]
}
