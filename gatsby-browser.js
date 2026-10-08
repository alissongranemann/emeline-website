// custom typefaces
import "typeface-lato"

// Netlify Identity emails (invite, password recovery) link to the site root;
// the identity widget that consumes the token only lives on the CMS page.
export const onClientEntry = () => {
  const { hash } = window.location
  if (/(invite|recovery|confirmation|email_change)_token=/.test(hash)) {
    window.location.replace(`/admin/${hash}`)
  }
}
