// self-hosted typefaces: Comfortaa for headings, Nunito for body text.
// Latin subset only: it covers Portuguese, and the other subsets would be
// inlined into every page
import "@fontsource/comfortaa/latin-400.css"
import "@fontsource/comfortaa/latin-700.css"
import "@fontsource/nunito/latin-400.css"
import "@fontsource/nunito/latin-400-italic.css"
import "@fontsource/nunito/latin-700.css"

// Netlify Identity emails (invite, password recovery) link to the site root;
// the identity widget that consumes the token only lives on the CMS page.
export const onClientEntry = () => {
  const { hash } = window.location
  if (/(invite|recovery|confirmation|email_change)_token=/.test(hash)) {
    window.location.replace(`/admin/${hash}`)
  }
}
