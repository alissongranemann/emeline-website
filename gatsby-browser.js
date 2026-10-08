// self-hosted typefaces: Comfortaa for headings, Nunito for body text
import "@fontsource/comfortaa/400.css"
import "@fontsource/comfortaa/700.css"
import "@fontsource/nunito/400.css"
import "@fontsource/nunito/400-italic.css"
import "@fontsource/nunito/700.css"

// Netlify Identity emails (invite, password recovery) link to the site root;
// the identity widget that consumes the token only lives on the CMS page.
export const onClientEntry = () => {
  const { hash } = window.location
  if (/(invite|recovery|confirmation|email_change)_token=/.test(hash)) {
    window.location.replace(`/admin/${hash}`)
  }
}
