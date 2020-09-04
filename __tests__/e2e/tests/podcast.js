const { WEB_ORIGIN } = require('../constants')

const mediaListSelectsSelector = '.media-list__selects'

module.exports = {
  before: function (browser) {
    browser.url(`${WEB_ORIGIN}/podcast/Yqft_RG8j`)
  },
  'Podcast Tests': function (browser) {
    browser
      .waitForElementWithText('span.media-header__title', 'Very Bad Wizards')
      .checkCurrentMedia(`Episode 185: The Devil's Playground`, `episode`)

      .scrollToSelector(mediaListSelectsSelector)
      .clickDropdownToggleAndItem(`Episodes`, `Clips`)

      .scrollToSelector(mediaListSelectsSelector)
      .clickDropdownToggleAndItem(`Clips`, `Episodes`)

      .scrollToSelector(mediaListSelectsSelector)
      .clickDropdownToggleAndItem(`top - past week`, `most recent`)

      .scrollToSelector(mediaListSelectsSelector)
      .clickDropdownToggleAndItem(`most recent`, `top - past day`)

      .scrollToSelector(mediaListSelectsSelector)
      .clickDropdownToggleAndItem(`top - past day`, `top - past week`)

      .scrollToSelector(mediaListSelectsSelector)
      .clickDropdownToggleAndItem(`top - past week`, `top - past month`)

      .scrollToSelector(mediaListSelectsSelector)
      .clickDropdownToggleAndItem(`top - past month`, `top - past year`)

      .testSharedMetaTags()
      .testPageMetaTags(
          `Very Bad Wizards`,
          `Very Bad Wizards is a podcast featuring a philosopher Tamler Sommers and a psychologist David Pizarro, who share a love for ethics, pop culture, and cognitive s`
      )
  },
  after: function (browser) {
    browser.end()
  }
}