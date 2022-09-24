import {Component} from 'react'
import {
  AppContainer,
  FormHeading,
  FormAndImageContainer,
  GenerateMeme,
  DisplayText,
  FormContainer,
  Label,
  Input,
  Select,
  Option,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    optionId: fontSizesOptionsList[0].optionId,
    fontSize: '',
    topText: '',
    bottomText: '',
    backgroundImage: '',
  }

  onChangeImageUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()

    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      optionId,
    } = this.state

    this.setState({
      backgroundImage: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: optionId,
    })
  }

  render() {
    const {
      backgroundImage,
      backgroundImageInput,
      topTextInput,
      bottomTextInput,
      topText,
      bottomText,
      fontSize,
      optionId,
    } = this.state
    return (
      <AppContainer>
        <FormHeading>Meme Generator</FormHeading>
        <FormAndImageContainer>
          <GenerateMeme data-testid="meme" backgroundImage={backgroundImage}>
            <DisplayText fontSize={fontSize}>{topText}</DisplayText>
            <DisplayText fontSize={fontSize}>{bottomText}</DisplayText>
          </GenerateMeme>
          <FormContainer onSubmit={this.onGenerateMeme}>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              type="text"
              placeholder="Enter the Image URL"
              onChange={this.onChangeImageUrl}
              id="imageUrl"
              value={backgroundImageInput}
            />
            <Label htmlFor="topText">Top Text</Label>
            <Input
              type="text"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
              id="topText"
              value={topTextInput}
            />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              type="text"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
              id="bottomText"
              value={bottomTextInput}
            />
            <Label htmlFor="select">Font Size</Label>
            <Select
              id="select"
              value={optionId}
              onChange={this.onChangeOptionId}
            >
              {fontSizesOptionsList.map(eachOption => (
                <Option value={eachOption.optionId} key={eachOption.optionId}>
                  {eachOption.displayText}
                </Option>
              ))}
            </Select>
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
        </FormAndImageContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
