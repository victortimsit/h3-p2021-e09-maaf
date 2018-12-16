<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="linked">
        <div class="download">
          <Smart-Link
            href="https://play.google.com/store"
            title="Téléchargez l'application pour Android"
            target="blank"
          >
            <img src="~/assets/icons/googlePlay.svg" alt="googlePlay">
          </Smart-Link>
          <Smart-Link
            href="https://www.apple.com/lae/ios/app-store/"
            title="Téléchargez l'application pour IOS"
            target="blank"
          >
            <img src="~/assets/icons/appStore.svg" alt="appStore">
          </Smart-Link>
        </div>
        <div class="socials">
          <ul>
            <li>
              <Smart-Link
                href="https://www.facebook.com/maafassurances"
                title="Facebook"
                target="blank"
              >
                <img src="~/assets/icons/facebook.svg" alt="facebook">
              </Smart-Link>
            </li>
            <li>
              <Smart-Link href="https://twitter.com/MAAFAssurances" title="Twitter" target="blank">
                <img src="~/assets/icons/twitter.svg" alt="twitter">
              </Smart-Link>
            </li>
            <li>
              <Smart-Link href="https://plus.google.com/+MaafFr" title="Google+" target="blank">
                <img src="~/assets/icons/googlePlus.svg" alt="googlePlus">
              </Smart-Link>
            </li>
            <li>
              <Smart-Link
                href="https://www.youtube.com/LaChaineMAAF"
                title="YouTube"
                target="blank"
              >
                <img src="~/assets/icons/YouTube.svg" alt="youTube">
              </Smart-Link>
            </li>
          </ul>
        </div>
      </div>
      <nav class="nav">
        <ul>
          <li>
            <Smart-Link href="https://www.maaf.fr/fr/assurance" title="MAAF">MAAF</Smart-Link>
          </li>
          <li>
            <Smart-Link href="/" title="Documents légaux">Documents légaux</Smart-Link>
          </li>
          <li>
            <Smart-Link href="/" title="Politique de confidentialité">Politique de confidentialité</Smart-Link>
          </li>
          <li>
            <Smart-Link href="/" title="Mentions légales">Mentions légales</Smart-Link>
          </li>
          <li>
            <Smart-Link href="/" title="A propos">A propos</Smart-Link>
          </li>
        </ul>
      </nav>
    </div>
    <div
      class="disclaimer"
    >Ce travail a été réalisé dans le cadre d'un projet pédagogique et à des fins pédagogiques, les droits d'exploitation n'ont pas fait l'object d'une vérification, ni d'une acquisition, contact:
      <Smart-Link href="https://edhbr.fr" target="blank">edhbr.fr</Smart-Link>
    </div>
  </footer>
</template>

<style scoped lang="stylus">
.footer
  background blue
  padding globalMargin globalMargin globalMargin * 0.25 globalMargin
  color white

.wrapper
  display flex
  justify-content space-between
  align-items center

  @media screen and (max-width: desktop)
    flex-flow column nowrap

.socials
  ul
    margin-top globalMargin * 0.5
    display flex
    justify-content space-between

  img
    width 32px
    height 32px

.nav, .disclaimer
  .smartLink:hover
    text-decoration underline

.nav
  @media screen and (max-width: desktop)
    padding globalMargin
    width 100%

  li
    @media screen and (min-width: desktop)
      display inline-block

      &:not(:last-child)::after
        content " -"

    @media screen and (max-width: desktop)
      &:not(:first-child)
        margin-top 12px

.disclaimer
  fontsize(11px)
  font-weight 300
  text-align right
</style>
