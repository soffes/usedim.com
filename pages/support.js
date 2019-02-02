import styled from 'styled-components'
import Page from '../components/page'
import SubHeading from '../components/subheading'
import SubSubHeading from '../components/subsubheading'

const Question = styled.div`
  margin-bottom: 2em;
`

export default () => (
  <Page title="Support">
    <SubHeading>Support</SubHeading>
    <Question>
      <SubSubHeading>How do I stop dimming?</SubSubHeading>
      <p>Simply quit Dim. To start dimming again, open Dim.</p>
    </Question>

    <Question>
      <SubSubHeading>Will you make a Windows?</SubSubHeading>
      <p>Sorry, no.</p>
    </Question>

    <Question>
      <SubSubHeading>Who makes Dim?</SubSubHeading>
      <p>Dim was designed and developed by <a href="http://nothingmagical.com" rel="external nofollow">Nothing Magical Inc.</a> in California.</p>
    </Question>

    <Question>
      <SubSubHeading>My question wasn't answered. Help!</SubSubHeading>
      <p>Just <a href="mailto:support@nothingmagical.com?subject=Dim for Mac Support">email me</a> and I'll get you taken care of!</p>
    </Question>
  </Page>
)
