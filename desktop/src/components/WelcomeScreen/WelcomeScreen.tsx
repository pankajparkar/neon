import * as React from 'react'

export class WelcomeScreen extends React.Component<{}, {}> {

  public async componentDidMount() {
    console.log('So')
  }

  public render() {
    return (
      <div>
        <h1>Welcome [name]</h1>
        <p>First-time explainer</p>
      </div>
    )
  }
}
