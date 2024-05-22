// home page
import naogamiImg from '../src/assets/Naogami-img.svg';
import gamaImg from '../src/assets/gamaimg.svg';
import YujiImg from '../src/assets/yujiimg.svg';
import senjuImg from '../src/assets/senju-img.svg';
import yujiPostiImg from '../src/assets/yujipost.svg';
import naogamiPostiImg from '../src/assets/Naogami-post.svg';
import gamaPostiImg from '../src/assets/gama-post.svg';
import senjuiPostiImg from '../src/assets/senjupost (2).svg';

// comments
import idrisImg from '../src/assets/idris santa-img.svg';
import elenaImg from '../src/assets/elena port-img.svg'
import cynthiaImg from '../src/assets/cynthia morgan-img.svg';

// friend
import moonImg from '../src/assets/moon-img.svg';
import girlImg from '../src/assets/girl-img.svg';
import shipImg from '../src/assets/ship-img.svg';

// // User profile
// import JohnImg from '../src/assets/profile-img.svg';
// import flowerImg from '../src/assets/flower.svg'
// import brickHouse from '../src/assets/brick-house.svg'
// import cityHouse from '../src/assets/city-house.svg'
// import seaImg from '../src/assets/sea-img.svg'
// home
export let people = [
  {
    id: 1,
    name: 'Yuji Itadori',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: YujiImg,
    postImg: yujiPostiImg,
    follow: 'following',
  },
  {
    id: 2,
    name: 'Naogami Shinya',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: naogamiImg,
    postImg: naogamiPostiImg,
    follow: 'follow',
  },
  {
    id: 3,
    name: 'Gama Oyabin',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: gamaImg,
    postImg: gamaPostiImg,
    follow: 'following',
  },
  {
    id: 4,
    name: 'Senju Hashirama',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: senjuImg,
    postImg: senjuiPostiImg,
    follow: 'follow',
  },
];

// comment
export let comments = [
  {
    id: 1,
    name: 'Idris Santa',
    time: '8 mins ago',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Sit in mauris consequat sed euismod vitae egestas diam. Diam fames in morbi egestas. Sit fermentum nisi.',
    profileImg: idrisImg,
    follow: `follow `,
  },
  {
    id: 2,
    name: 'Elena Port',
    time: '8 mins ago',
    comment: 'Lorem ipsum dolor sit amet consectetur. ',
    profileImg: elenaImg,
    follow: 'following',
  },
  {
    id: 3,
    name: 'Cynthia Morgan',
    time: '8 mins ago',
    comment:
      'orem ipsum dolor sit amet consectetur. Sit in mauris consequat sed euismod vitae egestas diam. Diam fames in morbi egestas. Sit fermentum nisi maecenas blandit posuere at sit.',
    profileImg: cynthiaImg,
    follow: `follow `,
  },
];

// friend profile
export let friendProfile = [
  {
    id: 1,
    name: 'Yuji Itadori',
    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: YujiImg,
    postImg: yujiPostiImg,
    follow: 'following',
  },
  {
    id: 2,
    name: 'Yuji Itadori',

    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: YujiImg,

    postImg: moonImg,
    follow: 'following',
  },
  {
    id: 3,
    name: 'Yuji Itadori',

    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: YujiImg,

    postImg: girlImg,
    follow: 'following',
  },
  {
    id: 4,
    name: 'Yuji Itadori',

    time: '8 mins ago',
    post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
    profileImg: YujiImg,

    postImg: shipImg,
    follow: 'following',
  },
];

// // User Profile
// export let UserProfile = [
//   {
//     id: 1,
//     name: 'John Doe',
//     time: '8 mins ago',
//     post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
//     profileImg: JohnImg,
//     postImg: flowerImg,
//   },
//   {
//     id: 2,
//     name: 'John Doe',

//     time: '8 mins ago',
//     post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
//     profileImg: YujiImg,

//     postImg: brickHouse,
//   },
//   {
//     id: 3,
//     name: 'John Doe',

//     time: '8 mins ago',
//     post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
//     profileImg: JohnImg,

//     postImg: cityHouse,
//   },
//   {
//     id: 4,
//     name: 'John Doe',

//     time: '8 mins ago',
//     post: 'Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.',
//     profileImg: JohnImg,

//     postImg: seaImg,
//   },
// ];