import React from 'react';
import PropTypes from 'prop-types';
import './FileTree.css';

const NODE_CLASS = [
	'none',
	'arrow right',
	'arrow down'
];

export default class FileTree extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		};
	}
	handleClick = () => {
		if (this.props.onClick) {
			this.props.onClick(this.props);
		}
		if (!this.props.children)
			return;
		this.setState({
			expanded: !this.state.expanded
		});
	}
	render() {
		const nodeState = this.props.children ? (this.state.expanded ? 2 : 1) : 0;
		return (
			<>
				{
					<div>
					{
						typeof(this.props.renderer) === 'function' ?
						this.props.renderer(this.props.name, nodeState, this.handleClick) :
						<div className="node" onClick={this.handleClick}>
							<span className={NODE_CLASS[nodeState]}></span>
							{this.props.name}
						</div>
					}
					{
						this.state.expanded ?
						<div className="children">
							{this.props.children}
						</div> : ''
					}
					</div>
				}
			</>
		)
	}
}

FileTree.propTypes = {
	children: PropTypes.any,
	name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	onClick: PropTypes.func,
	renderer: PropTypes.func
}