import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import UploadIcon from '@material-ui/icons/CloudUpload';

const commonPadding = 10;

const theme = createMuiTheme({
	palette: {
		primary: blue,
	},
});

const styles = theme => ({
	sidebar: {
		backgroundColor: "#F3F3F3",
		height: "100vh",
	},
	sidebarHeader: {
		height: 45,
		display: 'flex',
		alignItems: 'center',
		padding: commonPadding,
		justifyContent: 'space-between',
		borderBottom: '1px solid #DDD'
	},
	sidebarNav: {
		listStyle: "none",
		margin: commonPadding,
		padding: 0
	},
	sidebarNavLink: {
		display: "block",
		padding: commonPadding,
		textDecoration: 'none',
	},
	sidebarNavLinkActive: {
		display: "block",
		padding: commonPadding,
		background: "#FFF",
		textDecoration: 'none',
		borderLeft: '4px solid #4077E4',
		boxShadow: '0px 3px 3px #DDD'
	},
	content:{
		padding: commonPadding * 2
	},
	UploadIcon: {
		marginLeft:15
	}
});

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

export class DemoApp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: {id:'',content:''},
		};
	}

	componentDidMount(){
		this.setState({item:dataItems[0]});
	}

	handleNavClick(e,item){
		console.log(item);
		this.setState({item});
	}

	renderNav() {
		const { classes } = this.props;
		const { item } = this.state;
		const items = dataItems.map((dataitem, index) => {
			console.log(item);
			return (
				<li key={"navItm-"+index}>
					<a href={"#"+dataitem.slug} onClick={(e)=>this.handleNavClick(e,dataitem)} className={(item.id==dataitem.id) ? classes.sidebarNavLinkActive : classes.sidebarNavLink}>
						<Typography variant="h6">{dataitem.title}</Typography>
						<Typography variant="subtitle1">{dataitem.subtitle}</Typography>
					</a>
				</li>
			);
		});

		return (
			<ul className={classes.sidebarNav}>
				{items}
			</ul>
		);
	}


	render() {
		const _this = this;
		const { classes } = this.props;
		const { item } = this.state;

		return (
			<MuiThemeProvider theme={theme}>
				<Grid container>
					<Grid item md={3}>
						<div className={classes.sidebar}>
							<div className={classes.sidebarHeader}>
								<Typography variant="h6">FILES</Typography>
								<Button>Upload <UploadIcon className={classes.UploadIcon} /></Button>
							</div>
							<div className={classes.sidebarNavWrapper}>
								{this.renderNav()}
							</div>
						</div>
					</Grid>
					<Grid item md={9}>

						<AppBar position="static" color="primary">
							<Toolbar>
								<Typography variant="h6" color="inherit">
									{item.title}
							</Typography>
							</Toolbar>
						</AppBar>

						<div className={classes.content}>
							{<Typography variant="body1">{item.content}</Typography>}
						</div>

					</Grid>
				</Grid>
			</MuiThemeProvider>
		);

	}
}
export default (withStyles(styles)(DemoApp));