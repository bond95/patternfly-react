import React from 'react';
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';

class InfoAlert extends React.Component {
  state = { alertOneVisible: true, alertTwoVisible: true };
  hideAlertOne = () => this.setState({ alertOneVisible: false });
  hideAlertTwo = () => this.setState({ alertTwoVisible: false });

  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert
            variant="info"
            title="Info alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertOne} />}
          >
            Info alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && (
          <Alert
            variant="info"
            title="Info alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
          />
        )}
        <Alert
          variant="info"
          title="Info alert title"
          action={<AlertActionLink>Action Button</AlertActionLink>}
        />
        <Alert variant="info" title="Info alert title" />
      </React.Fragment>
    );
  }
}

export default InfoAlert;
