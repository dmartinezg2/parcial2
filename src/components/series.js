import React from 'react';
import {FormattedDate, FormattedNumber, FormattedPlural,FormattedMessage} from 'react-intl';

export default class Job extends React.Component {

  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				<td>{this.props.offer.channel}</td>
                <td>{this.props.offer.description}</td>
  			</tr>
  		);
	}
}