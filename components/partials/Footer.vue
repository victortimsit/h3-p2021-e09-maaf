<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="linked">
        <div class="download">
          <SmartLink
            href="https://play.google.com/store"
            title="Téléchargez l'application pour Android"
            target="blank"
          >
            <img src="~/assets/icons/googlePlay.svg" alt="googlePlay">
          </SmartLink>
          <SmartLink
            href="https://www.apple.com/lae/ios/app-store/"
            title="Téléchargez l'application pour IOS"
            target="blank"
          >
            <img src="~/assets/icons/appStore.svg" alt="appStore">
          </SmartLink>
        </div>
        <div class="socials">
          <ul>
            <li>
              <SmartLink
                href="https://www.facebook.com/maafassurances"
                title="Facebook"
                target="blank"
              >
                <img src="~/assets/icons/facebook.svg" alt="facebook">
              </SmartLink>
            </li>
            <li>
              <SmartLink href="https://twitter.com/MAAFAssurances" title="Twitter" target="blank">
                <img src="~/assets/icons/twitter.svg" alt="twitter">
              </SmartLink>
            </li>
            <li>
              <SmartLink href="https://plus.google.com/+MaafFr" title="Google+" target="blank">
                <img src="~/assets/icons/googlePlus.svg" alt="googlePlus">
              </SmartLink>
            </li>
            <li>
              <SmartLink href="https://www.youtube.com/LaChaineMAAF" title="YouTube" target="blank">
                <img src="~/assets/icons/youTube.svg" alt="youTube">
              </SmartLink>
            </li>
          </ul>
        </div>
      </div>
      <nav class="nav">
        <ul>
          <li>
            <SmartLink href="https://www.maaf.fr/fr/assurance" title="MAAF">MAAF</SmartLink>
          </li>
          <li>
            <SmartLink href="/" title="Documents légaux">Documents légaux</SmartLink>
          </li>
          <li>
            <SmartLink href="/" title="Politique de confidentialité">Politique de confidentialité</SmartLink>
          </li>
          <li>
            <SmartLink href="/" title="Mentions légales">Mentions légales</SmartLink>
          </li>
          <li>
            <SmartLink href="/" title="A propos">A propos</SmartLink>
          </li>
        </ul>
      </nav>
    </div>
    <div
      class="disclaimer"
    >Ce travail a été réalisé dans le cadre d'un projet pédagogique et à des fins pédagogiques, les droits d'exploitation n'ont pas fait l'object d'une vérification, ni d'une acquisition, contact:
      <SmartLink href="https://edhbr.fr" target="blank">edhbr.fr</SmartLink>
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
