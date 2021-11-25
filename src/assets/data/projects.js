import { v4 as uuidv4 } from 'uuid';
import WhaccImg from '../images/whacc.png';
import IDSImg from '../images/IDS.png';
import DRCImg from '../images/DRC.png';
import LicImg from '../images/License.jpg';
import ShopImg from '../images/shop.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Efficient IDS',
    desc:
      'A specialized autoencoder and ANN based classification pipeline for intrusion detection. Dataset used was NSL-KDD and CICIDS-2018.',
    img: IDSImg,
    link:
      'https://github.com/ma1VAR3/Intrusion-Detection-using-Representation-Block-with-Specialized-Autoencoders',
  },
  {
    id: uuidv4(),
    name: 'Diabetic Retinopathy Classifier using PSO',
    desc:
      'Used Particle Swarm Optimization to find the best suitable model for Diabetic Retinopathy Classification.',
    img: DRCImg,
    link:
      'https://github.com/0xpranjal/Efficient-architecture-search-in-multidimensional-space-using-Swarm-Intelligence-algorithm-for-DR',
  },
  {
    id: uuidv4(),
    name: 'Licensr',
    desc:
      'License creation and authentication on Ethereum Blockchain using ERC721 protocol to prevent software piracy done using Keygens.',
    img: LicImg,
  },
  {
    id: uuidv4(),
    name: 'Shop Automation System',
    desc:
      'A set of tools to automate offline shopping. Currently involves food item classification and finding the shortest path in the shop.',
    img: ShopImg,
  },
  {
    id: uuidv4(),
    name: 'Whacc: The social media webapp',
    desc:
      'Developed on MERN Stack, it is a basic social media webapp with all the necessary features for a modern social life experience.',
    img: WhaccImg,
  },
];

export default projects;
