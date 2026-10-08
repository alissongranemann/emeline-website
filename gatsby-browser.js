// self-hosted typefaces: Comfortaa for body text, Roboto 900 for headings
// (the only Roboto weight the site ever loaded, so bold text keeps its look)
import "@fontsource/comfortaa/400.css"
import "@fontsource/comfortaa/700.css"
import "@fontsource/roboto/900.css"

// Netlify Identity emails (invite, password recovery) link to the site root;
// the identity widget that consumes the token only lives on the CMS page.
export const onClientEntry = () => {
  const { hash } = window.location
  if (/(invite|recovery|confirmation|email_change)_token=/.test(hash)) {
    window.location.replace(`/admin/${hash}`)
  }
}
