import styled from 'styled-components'
import Page from '../components/page'
import Subheading from '../components/subheading'
import MacAppStoreButton from '../components/mac_app_store_button'

export default () => (
  <Page>
    <Subheading>Easily dim your screen</Subheading>
    <p>When you connect your Mac to a TV with bad contrast or share your screen in a video conference, the colors can look really washed out.</p>
    <p>Dimming your screen can help! This can make a big difference if you’re presenting designs or other things where color matters.</p>
    <p>Dim easily dims your screen. You can adjust how much you’d like to dim your screen with a slider.</p>
    <p>Simple as that. <strong>It’s free.</strong> Enjoy!</p>
    <p>
      <MacAppStoreButton />
    </p>
  </Page>
)
