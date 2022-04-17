const recipes=[
    {
        id:'1.',
        name:'Dal Makhani',
        img:'assets/dm.jpg',
        category:'veg',
        time: '1h 20m',
        calories: '415',
        serve: '4 serves',
        description: 'Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils (known as Urad dal or Kaali Dal in Hindi) and Kidney Beans (known as Rajma in Hindi).'
    },

    // {  
    //     id:'2.',
    //     name: 'Aloo Kulche',
    //     img:'assets/alook.jpg',
    //     category:'veg',
    //     time:'2h 30m',
    //     calories:'616',
    //     serve:'6 serves',
    //     description:'Stuffed Vegetable Kulcha is a soft and fluffy Indian leavened bread which is made stuffed with seasonal vegetables. They work well with any North indian menu, served with Channa and Raita, or even plain with melted butter for breakfast.',
    // },

    {
        id:'2.',
        name:'Butter Chicken',
        img:'assets/bc.jpg',
        category:'nonveg',
        time:'60m',
        calories:'438',
        serve:'4 serves',
        description:'Butter chicken also known as Chicken Makhani is a classic Indian dish where grilled chicken (Tandoori chicken) is simmered in a spicy, aromatic, buttery and creamy tomato gravy. '

    // },
    // {
    //     id:'4.',
    //     name:'Browines',
    //     img:'assets/browmies.jpg',
    //     category:'sweet',
    //     time:'60m',
    //     calories:'466',
    //     serve:'16 serves',
    //     description:'A chocolate brownie or simply a brownie is a square or rectangular chocolate baked confection. Brownies come in a variety of forms  and may be either fudgy or cakey, depending on their density.'

    // },
    // {
    //     id:'5.',
    //     name:'Chicken 65',
    //     img:'assets/c65.jpg',
    //     category:'nonveg',
    //     time:'40m',
    //     calories:'372',
    //     serve:'8 serves',
    //     description:'One of the spiciest chicken delicacies of South Indian cuisine, Chicken 65 is a delight for meat lovers. It can be enjoyed on any occasion and is super-easy to make'

    // },
    // {
    //     id:'6.',
    //     name:'Chocolate Cake',
    //     img:'assets/cc.jpg',
    //     category:'sweet',
    //     time:'2h 30m',
    //     calories:'371',
    //     serve:'8 serves',
    //     description:''

    // },
    // {
    //     id:'7.',
    //     name:'Chicken Briyani',
    //     img:'assets/Chicken-Biryani.jpg',
    //     category:'nonveg',
    //     time:'1hr 20m',
    //     calories:'455',
    //     serve:'7 serving',
    //     description:'Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice. following the traditional layered approach to assembling it.'

    // },
    // {
    //     id:'8.',
    //     name:'Chilli Chicken',
    //     img:'assets/chillic.jpg',
    //     category:'nonveg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:''
    // },

    // {
    //     id:'9.',
    //     name:'Cookies',
    //     img:'assets/cookies.jpg',
    //     category:'sweet',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:''

    // },

    // {
    //     id:'10.',
    //     name:'Cupcakes',
    //     img:'assets/cupcake.jpg',
    //     category:'sweet',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'11.',
    //     name:'Dal Tadka',
    //     img:'assets/dt.jpg',
    //     category:'eg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'12.',
    //     name:'Fish Curry',
    //     img:'assets/fc.jpg',
    //     category:'nonveg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'13.',
    //     name:'Garlic Bread',
    //     img:'assets/gb.jpg',
    //     category:'snack',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'14.',
    //     name:'Hariyali Chicken Kabab',
    //     img:'assets/hck.jpg',
    //     category:'snack',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'15.',
    //     name:'Hara Bhara Kabab',
    //     img:'assets/kabab.jpg',
    //     category:'snack',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    },

    {
        id:'3.',
        name:'Kher',
        img:'assets/kher.jpg',
        category:'sweet',
        time:'2h',
        calories:'400',
        serve:'5 serve',
        description:'Kheer is an Indian sweet made with cereals, lentils or their flours. The Indian cuisine has many variations of kheer recipes. Kheer is like a pudding traditionally made with milk, sugar and some dry fruits. ',
    },
    // {
    //     id:'17.',
    //     name:'Kadai Mushroom',
    //     img:'assets/kmush.jpg',
    //     category:'veg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'18.',
    //     name:'Kadai Paneer',
    //     img:'assets/kp.jpg',
    //     category:'veg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'19.',
    //     name:'Momos',
    //     img:'assets/momos.jpg',
    //     category:'snack',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'20.',
    //     name:'Makke Ki Roti Sarso Ka Sag',
    //     img:'assets/mrss.jpg',
    //     category:'veg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'21.',
    //     name:'Mozerella Sticks',
    //     img:'assets/ms.jpg',
    //     category:'snack',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'22.',
    //     name:'Pav Bhaji',
    //     img:'assets/pavb.jpg',
    //     category:'veg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'23.',
    //     name:'Paneer Butter Masala',
    //     img:'assets/pbm.jpg',
    //     category:'veg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'24.',
    //     name:'Pizza Parantha',
    //     img:'assets/pizzap.jpg',
    //     category:'veg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'25.',
    //     name:'Paneer Tikka',
    //     img:'assets/pt.jpg',
    //     category:'snack',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'26.',
    //     name:'Reshmi Kabab',
    //     img:'assets/rk.jpg',
    //     category:'nonveg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'27.',
    //     name:'Stuffed Capsicum',
    //     img:'assets/sc.png',
    //     category:'veg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'28.',
    //     name:'Sooji Halwa',
    //     img:'assets/sh.jpg',
    //     category:'sweet',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'29.',
    //     name:'Soya Chaap',
    //     img:'assets/soyac.jpg',
    //     category:'veg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'30.',
    //     name:'Spicy Prawns',
    //     img:'assets/sp.jpg',
    //     category:'snack',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'31.',
    //     name:'Spring Rolls',
    //     img:'assets/sr.jpg',
    //     category:'snack',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
    // {
    //     id:'32.',
    //     name:'Veg Briyani',
    //     img:'assets/vb.jpg',
    //     category:'veg',
    //     time:'',
    //     calories:'',
    //     serve:'',
    //     description:'',
    // },
]

export default recipes;

export const spices=[
    {
        img:'assets/cp.jpg',
        name:'Cinnamon Powder',
        description:'While Americans consider cinnamon a spice for desserts, in India cinnamon sticks or powder are used to season savory meat and rice dishes.',
    },
    {
        img:'assets/rcp.jpeg',
        name:'Red Chilli Powder',
        description:'Similar to dried Italian red pepperoncini, the most common Indian dried red chiles range from medium-hot to hot. Jaffrey notes that they are milder when used whole. Dried chiles are used in a wide range of Indian recipes from dals to vegetable dishes.'
    },
    {
        img:'assets/cs.jpg',
        name:'Cumin Seeds',
        description:'Roasting brings out the nutty, perfumed flavor of cumin seeds; the spice is a common ingredient in many curries. Jaffrey uses it in a simple potato dish, til ke aloo.'
    },
    {
        img:'assets/elaichi.png',
        name:'Cardamom',
        description:'Look for green cardamom pods, they are more aromatic than the bleached whitish cardamom pods. If a recipe calls for cardamom seeds, split open the pods and extract the seeds.'
    },
    {
        img:'assets/cors.jpg',
        name:'Coriander Seeds',
        description:'Jaffrey recommends buying aromatic coriander seeds rather than pre-ground coriander: Grind the seeds at home, then store the powder in a tightly closed container and use within a month.'
    },
    {
        img:'assets/tp.jpg',
        name:'Turmeric Powder',
        description:'Bright ground turmeric powder is derived from a root in the ginger family, adds color to many dishes from dals to rice. Be careful: It stains clothes easily.'
    }
]