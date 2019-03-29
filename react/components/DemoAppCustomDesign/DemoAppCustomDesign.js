import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import AppBar from './AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import UploadIcon from '@material-ui/icons/CloudUpload';
import MenuIcon from '@material-ui/icons/Menu';
import LeftArrowIcon from '@material-ui/icons/Arrowback';
import IconButton from '@material-ui/core/IconButton';

import './style.scss';

const dataItems = [
	{
		id: 1,
		slug: 'document-1',
		title: 'Document #1',
		subtitle: 'Me, Dustin',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt metus mi, nec pulvinar nunc hendrerit nec. Mauris in ultricies eros. Phasellus ornare tempor magna, vitae lobortis sem. Pellentesque placerat elementum magna id dictum. Fusce fringilla est ut turpis pulvinar sollicitudin. Aenean a malesuada diam. Proin a ex non augue blandit mattis at a tellus. Nulla ac dolor neque. Nulla vel rutrum risus, a condimentum velit. Duis a cursus dui. Curabitur mollis ligula nunc.
		Vestibulum non tempor quam. Integer quis leo ex. Nam gravida magna id lacus luctus, ut fringilla neque bibendum. Suspendisse a finibus mauris. Vestibulum tristique risus et ligula laoreet euismod. Nam at lectus rutrum, vestibulum lorem tempus, sollicitudin erat. Suspendisse potenti. Donec a posuere tellus. Nulla consequat purus vel nulla scelerisque tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
		Aliquam erat volutpat. Phasellus vestibulum vestibulum tempus. Sed sollicitudin, nisl ac vehicula commodo, massa tortor tempor mauris, ac lobortis ligula massa vel ex. Nunc pulvinar ac nunc et fermentum. Nam gravida tellus vel ligula varius, vitae placerat mi rutrum. Etiam ut tellus vestibulum, pretium urna vitae, rutrum orci. Nullam in nibh orci.
		Quisque placerat commodo lacus a sagittis. Maecenas id neque id arcu ultricies convallis. Nam quis faucibus ex. Proin non eros eget purus auctor accumsan. Proin ligula felis, sodales a vehicula id, hendrerit id eros. Cras scelerisque at libero at suscipit. Aliquam erat volutpat. Mauris ac ante eu velit laoreet finibus vitae nec libero.
		Nullam porttitor nec dolor at placerat. Fusce eu justo sed dui porttitor consequat. Quisque ac diam at risus venenatis iaculis nec a sapien. Maecenas massa lectus, viverra id lacus id, eleifend mollis odio. Duis ut blandit lacus. Sed ut mi diam. Nullam urna arcu, vestibulum id neque non, tincidunt sollicitudin tortor. Maecenas dolor purus, suscipit ac rutrum et, molestie sit amet nulla. Suspendisse tincidunt congue ligula a blandit. Donec iaculis tincidunt lobortis. Quisque nec mauris enim.`,
	}, {
		id: 2,
		slug: 'document-2',
		title: 'Document #2',
		subtitle: 'Me, Dustin',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt metus mi, nec pulvinar nunc hendrerit nec. Mauris in ultricies eros. Phasellus ornare tempor magna, vitae lobortis sem. Pellentesque placerat elementum magna id dictum. Fusce fringilla est ut turpis pulvinar sollicitudin. Aenean a malesuada diam. Proin a ex non augue blandit mattis at a tellus. Nulla ac dolor neque. Nulla vel rutrum risus, a condimentum velit. Duis a cursus dui. Curabitur mollis ligula nunc.
		Vestibulum non tempor quam. Integer quis leo ex. Nam gravida magna id lacus luctus, ut fringilla neque bibendum. Suspendisse a finibus mauris. Vestibulum tristique risus et ligula laoreet euismod. Nam at lectus rutrum, vestibulum lorem tempus, sollicitudin erat. Suspendisse potenti. Donec a posuere tellus. Nulla consequat purus vel nulla scelerisq1ue tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
		Aliquam erat volutpat. Phasellus vestibulum vestibulum tempus. Sed sollicitudin, nisl ac vehicula commodo, massa tortor tempor mauris, ac lobortis ligula massa vel ex. Nunc pulvinar ac nunc et fermentum. Nam gravida tellus vel ligula varius, vitae placerat mi rutrum. Etiam ut tellus vestibulum, pretium urna vitae, rutrum orci. Nullam in nibh orci.`,
	}, {
		id: 3,
		slug: 'document-3',
		title: 'Document #3',
		subtitle: 'Me, Dustin',
		content: `Vestibulum non tempor quam. Integer quis leo ex. Nam gravida magna id lacus luctus, ut fringilla neque bibendum. Suspendisse a finibus mauris. Vestibulum tristique risus et ligula laoreet euismod. Nam at lectus rutrum, vestibulum lorem tempus, sollicitudin erat. Suspendisse potenti. Donec a posuere tellus. Nulla consequat purus vel nulla scelerisque tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
		Aliquam erat volutpat. Phasellus vestibulum vestibulum tempus. Sed sollicitudin, nisl ac vehicula commodo, massa tortor tempor mauris, ac lobortis ligula massa vel ex. Nunc pulvinar ac nunc et fermentum. Nam gravida tellus vel ligula varius, vitae placerat mi rutrum. Etiam ut tellus vestibulum, pretium urna vitae, rutrum orci. Nullam in nibh orci.
		Quisque placerat commodo lacus a sagittis. Maecenas id neque id arcu ultricies convallis. Nam quis faucibus ex. Proin non eros eget purus auctor accumsan. Proin ligula felis, sodales a vehicula id, hendrerit id eros. Cras scelerisque at libero at suscipit. Aliquam erat volutpat. Mauris ac ante eu velit laoreet finibus vitae nec libero.
		Nullam porttitor nec dolor at placerat. Fusce eu justo sed dui porttitor consequat. Quisque ac diam at risus venenatis iaculis nec a sapien. Maecenas massa lectus, viverra id lacus id, eleifend mollis odio. Duis ut blandit lacus. Sed ut mi diam. Nullam urna arcu, vestibulum id neque non, tincidunt sollicitudin tortor. Maecenas dolor purus, suscipit ac rutrum et, molestie sit amet nulla. Suspendisse tincidunt congue ligula a blandit. Donec iaculis tincidunt lobortis. Quisque nec mauris enim.`,
	},
];

export class DemoAppCustomDesign extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: { id: '', content: '' },
			isSideBarOpen: false
		};
	}

	componentDidMount() {
		this.setState({ item: dataItems[0] });
	}

	handleNavClick(e, item) {
		this.setState({ item });
	}

	handleDrawerMennu(){
		const { isSideBarOpen } = this.state;
		this.setState({isSideBarOpen:!isSideBarOpen});
	}

	renderNav() {
		const { item } = this.state;
		const items = dataItems.map((dataitem, index) => {
			return (
				<li key={"navItm-" + index}>
					<a href={"#" + dataitem.slug} onClick={(e) => this.handleNavClick(e, dataitem)} className={(item.id == dataitem.id) ? 'sidebarNavLinkActive' : 'sidebarNavLink'}>
						<Typography variant="h6" component="h6">{dataitem.title}</Typography>
						<Typography variant="subtitle1" component="span">{dataitem.subtitle}</Typography>
					</a>
				</li>
			);
		});

		return (
			<ul className='sidebarNav'>
				{items}
			</ul>
		);
	}


	render() {
		const _this = this;
		const { item, isSideBarOpen } = this.state;

		return (
			<div className="container">
				<div className={(isSideBarOpen) ? "siderbar siderbarActive" : "sidebar"}>
					<div className="sidebarHeader">
						<Typography variant="h6" className="sidebarHeaderLeft">FILES</Typography>
						<Button className="sidebarHeaderRight">Upload <UploadIcon className="UploadIcon" /></Button>
					</div>
					<div className="sidebarNavWrapper">
						{this.renderNav()}
					</div>
				</div>
				<div className="main">
					<AppBar>
						<Toolbar>
							<IconButton className="menuIconButton" onClick={(e)=>this.handleDrawerMennu()}>{(isSideBarOpen) ? <LeftArrowIcon className="menuIcon" /> : <MenuIcon className="menuIcon" />}</IconButton>
							<Typography variant="h6" color="inherit">
								{item.title}
							</Typography>
						</Toolbar>
					</AppBar>
					<div className="content">
						{<Typography variant="body1">{item.content}</Typography>}
					</div>
				</div>
			</div>
		);

	}
}
export default DemoAppCustomDesign;