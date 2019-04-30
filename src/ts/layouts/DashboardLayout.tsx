import React, { Component } from 'react'
import { connect } from 'react-redux'
import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image'
import { IAppState } from '../background/store/all'
import { LayoutContainer } from '../components/basic-components'
import { Color } from '../components/styles/themes'

interface IDashboardProps extends StateProps, DispatchProps {}

interface IDashboardState {
  color: Color
}

class DashboardLayout extends Component<IDashboardProps, IDashboardState> {

  getBackgroundImageUrl = () => {
    return `/assets/background/color-bg-${this.props.settings.color}.svg`
  }

  render () {
    return (
      <LayoutContainer>
        <Image src={this.getBackgroundImageUrl()} width={375}/>
        {this.props.children}
      </LayoutContainer>
    )
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    settings: state.settings
  }
}

const mapDispatchToProps = {}
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout)
