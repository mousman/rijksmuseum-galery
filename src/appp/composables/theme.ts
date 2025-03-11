const THEME = ['theme-retro', 'theme-default']

export function applyDefaultTheme() {
  document.body.classList.remove(THEME[0], THEME[1])
  document.body.classList.add('theme-default')
}

export function switchTheme() {
  if (document.body.classList.contains(THEME[0]))
    document.body.classList.replace(THEME[0], THEME[1])
  else if (document.body.classList.contains(THEME[1]))
    document.body.classList.replace(THEME[1], THEME[0])
}
