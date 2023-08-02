import { InputText } from 'primereact/inputtext';
import Dropzone from '../../../components/client/dropzone';
import { useState , useCallback} from 'react';
import cuid from "cuid";
import { Button } from 'primereact/button';
import Icon1 from '../../../assets/img/coin/1.svg';
import Icon2 from '../../../assets/img/coin/2.svg';
import Icon3 from '../../../assets/img/coin/3.svg';
import Icon4 from '../../../assets/img/coin/4.svg';
import Icon5 from '../../../assets/img/coin/5.svg';
import Icon6 from '../../../assets/img/coin/6.svg';
import Info_Icon from '../../../assets/img/info.svg';

const NFTs = () => {

	//opened image
	const [images, setImages] = useState([]);

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

	return(
		<div className="reward-card-right">
			<p className='title'>NFT</p>
			<div className="field">
                <div className='label-row'>
                    <label htmlFor="title1" className="block">NFT name<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title1" aria-describedby="username1-help" className="ipt-txt"/>
            </div>

            <Dropzone onDrop={onDrop} isEmpty={true} accept={"image/*"} className="nft-ipt-box flex align-items-center justify-content-center" />

			<div className="field">
                <div className='label-row'>
                    <label htmlFor="title1" className="block">Distribution among winners<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title1" aria-describedby="username1-help" className="ipt-txt"/>
            </div>
            <div className="field">
                <div className='label-row'>
                    <label htmlFor="title1" className="block">Collection name<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title1" aria-describedby="username1-help" className="ipt-txt"/>
            </div>
            <div className="field">
                <div className='label-row'>
                    <label htmlFor="title2" className="block">NFT name (token symbols)<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title2" aria-describedby="username1-help" className="ipt-txt"/>
            </div>  
			{/* <div className='nft-btn-container'>
                <div className="flex flex-row justify-content-between nft-btn-row">
                    <div class="nft-btn flex align-items-center justify-content-center"><img src={ Icon1 }></img></div>
                    <div class="nft-btn flex align-items-center justify-content-center"><img src={ Icon2 }></img></div>
                    <div class="nft-btn flex align-items-center justify-content-center"><img src={ Icon3 }></img></div>
                </div>
                <div className="flex flex-row justify-content-between nft-btn-row">
                    <div class="nft-btn flex align-items-center justify-content-center"><img src={ Icon4 }></img></div>
                    <div class="nft-btn flex align-items-center justify-content-center"><img src={ Icon5 }></img></div>
                    <div class="nft-btn flex align-items-center justify-content-center"><img src={ Icon6 }></img></div>
                </div>
            </div> */}
			<div className='mb-3'>
                <div class="flex align-items-center justify-content-between gap-2 mb-2">
                    <Button className=" p-button-secondary nft-btn flex-grow-1  align-items-center justify-content-center" ><img src={ Icon1 }/></Button>
                    <Button className=" p-button-secondary nft-btn flex-grow-1  align-items-center justify-content-center" ><img src={ Icon2 }/></Button>
                    <Button className=" p-button-secondary nft-btn flex-grow-1 align-items-center justify-content-center" ><img src={ Icon3 }/></Button>
                </div>
                <div class="flex align-items-center justify-content-between gap-2 mb-2">
                    <Button className=" p-button-secondary nft-btn flex-grow-1 align-items-center justify-content-center" ><img src={ Icon4 }/></Button>
                    <Button className=" p-button-secondary nft-btn flex-grow-1 align-items-center justify-content-center" ><img src={ Icon5 }/></Button>
                    <Button className=" p-button-secondary nft-btn flex-grow-1 align-items-center justify-content-center" ><img src={ Icon6 }/></Button>
                </div>
            </div>
            <div className="deploy-btn flex align-items-center justify-content-center">Deploy</div>
		</div>
	)
}

export default NFTs;
