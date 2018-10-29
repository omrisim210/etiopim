let $ = id => document.getElementById(id)
let color = 'light'
function toggleDarkLight() {
  color = color === 'dark' ? 'light' : 'dark'
  switchStyle(color)
  return false
}

let styleCookieName = "style"
let styleCookieDuration = 30
let styleDomain = "thesitewizard.com"

function switchStyle(cssTitle) {
  let linkTag = document.getElementsByTagName("link")
  for (let i = 0; i < linkTag.length; i++) {
    if ((linkTag[i].rel.indexOf("stylesheet") != -1) &&
      linkTag[i].title) {
      linkTag[i].disabled = true
      if (linkTag[i].title == cssTitle) {
        linkTag[i].disabled = false
      }
    }
    setCookie(styleCookieName, cssTitle, styleCookieDuration, styleDomain)
  }
}
function setStyleFromCookie() {
  let cssTitle = getCookie(styleCookieName)
  if (cssTitle.length) {
    switchStyle(cssTitle);
  }
}
function setCookie(cookieName, cookieValue, lifespanInDays, validDomain) {
  let domainString = validDomain ?
    ("; domain=" + validDomain) : ''

  document.cookie = cookieName +
    "=" + encodeURIComponent(cookieValue) +
    "; max-age=" + 60 * 60 *
    24 * lifespanInDays +
    "; path=/" + domainString
}
function getCookie(cookieName) {
  let cookieString = document.cookie;
  if (cookieString.length != 0) {
    let cookieArray = cookieString.split('; ')
    for (let i = 0; i < cookieArray.length; i++) {
      cookieValue = cookieArray[i].match(cookieName + '=(.*)')
      if (cookieValue != null) {
        return decodeURIComponent(cookieValue[1])
      }
    }
  }
  return ''
}

const bd = new Date('2018-11-02 00:00').getTime()

function updateTimer() {
  let now = new Date().getTime()
  let diff = bd - now

  let d = Math.floor(diff / (1000 * 60 * 60 * 24))
  let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  let s = Math.floor((diff % (1000 * 60)) / 1000)

  $('timer').innerHTML = `${d} ימים, ${h} שעות, ${m} דקות, ${s} שניות`
}


window.setInterval(updateTimer, 1000)
