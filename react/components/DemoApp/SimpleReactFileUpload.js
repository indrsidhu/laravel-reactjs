import React from 'react'
import axios, { post } from 'axios';
import Dropzone from 'react-dropzone'

import Loader from 'react-loaders';
import './loader.scss';

class SimpleReactFileUpload extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			file: null,
			loading: false,
		}
	}

	onDrop(acceptedFiles, rejectedFiles) {

		acceptedFiles.map(file => {
			this.setState({ loading: true });
			const url = APP_BASE_URL + '/ajax/demo-upload-pic';
			const formData = new FormData();
			formData.append("file", file);
			axios.post(url, formData, {
				headers: { 'content-type': 'multipart/form-data' },
			}).then(response => {
				if (response.data.type == "success") {
					this.props.onFileUploaded(response.data);
				} else {
					toastr.error(response.data.message);
				}
				this.setState({ loading: false });
			})
		});
	}

	render() {
		return (
			<div>
				<Dropzone className="visionDropzone" onDrop={this.onDrop.bind(this)}>
					{({ getRootProps, getInputProps }) => (
						<section className="visionDropzone">
							<p className="heading">
								Drop your picture to classify.
        					</p>
							<Loader color='black' type="ball-clip-rotate" active={this.state.loading} />
							<small className="text-muted">Note: your picture uploaded to server temporarely,<br /> just for your session.</small>

						</section>
					)}
				</Dropzone>
			</div>
		)
	}
}



export default SimpleReactFileUpload