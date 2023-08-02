import { InputText } from 'primereact/inputtext';
import Dropzone from '../../../components/client/dropzone';
import { useState , useCallback} from 'react';
import cuid from "cuid";
import Info_Icon from '../../../assets/img/info.svg';

import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

const WhiteList = () => {

	//opened image
	const [images, setImages] = useState([]);
	const [editorState, setEditorState] = useState(
	    () => EditorState.createEmpty(),
	);

	const onDrop = useCallback(acceptedFiles => {
	    // Loop through accepted files
	    acceptedFiles.map(file => {
	      // Initialize FileReader browser API
	      const reader = new FileReader();
	      // onload callback gets called after the reader reads the file data
	      reader.onload = function(e) {
	        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
	        setImages(prevState => [
	          ...prevState,
	          { id: cuid(), src: e.target.result }
	        ]);
	      };
	      // Read the file as Data URL (since we accept only images)
	      reader.readAsDataURL(file);
	      return file;
	    });
	}, []);

	const Image = ({ image }) => {
	  return (
	    <div className="file-item">
	      <img src={image.src}  className="quest-setup-img" />
	    </div>
	  );
	};

	const ImageList = ({ images }) => {

	  // render each image by calling Image component
	  const renderImage = (image, index) => {
	    return (
	      <Image
	        image={image}
	        key={`${image.id}-image`}
	      />
	    );
	  };

	  // Return the list of files
	  return <section className="file-list">{images.map(renderImage)}</section>;
	};

	return (
		<div className="reward-card-right">
			<p className='title'>Whitelist title</p>
			<div className="ipt-text-div">
				<input type="text" placeholder="Quest title" className="ipt_title"/>
				<div className="flex flex-row align-items-center gap-2 admin-setup-title">
		    		<p className="title">Description</p>
		    		<img src={Info_Icon}/>
		    	</div>
		    	<Editor 
		    	  editorState={editorState}
				  onEditorStateChange={setEditorState}
				  wrapperClassName="wrapper-class"
				  editorClassName="editor-class"
				  toolbarClassName="toolbar-class"
				  toolbar={{ 
				  	options: ["blockType",  "inline", "list", "image", "link"],

			        blockType: {
			          inDropdown: false, options:['H1','H2']
			        },
			        inline: { inDropdown: false, options:['bold','italic','underline'] },
			        list: { inDropdown: false, options:['unordered','ordered'] },
			        link: { inDropdown: false, options:['link'] },

				  }}
				/>
			</div>

            <Dropzone onDrop={onDrop} accept={"image/*"} isEmpty={true} className="nft-ipt-box flex align-items-center justify-content-center" />

		</div>
	)
}

export default WhiteList;
