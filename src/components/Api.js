const recipes=[
    {
        id:'1.',
        name:'Dal Makhani',
        img:'assets/dm.jpg',
        category:'veg',
        time: '1h 20m',
        calories: '415',
        serve: '4 serves',
        description:"Dal Makhani is one of the most popular lentil recipes from the North Indian \n Punjabi cuisine made with Whole Black Lentils (known as Urad dal or Kaali Dal in Hindi) and Kidney Beans (known as Rajma in Hindi)."
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
        description:'Butter chicken also known as Chicken Makhani is a classic Indian dish where grilled chicken (Tandoori chicken) is simmered in a spicy, aromatic, buttery and creamy tomato gravy.'

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
];

export const vegrecipes=[
    {
        name:'Dal Makhani',
        img:'assets/dm.jpg',
        ing1:'2 cup soaked overnight red kidney beans, 1 teaspoon red chilli powder, 4 tablespoon butter, 1 large chopped onion, 1/2 cup tomato puree, 1/2 cup fresh cream, 1/2 teaspoon ginger paste, water as required',
        ing2:'salt as required, 2 inch chopped ginger, 1 tablespoon refined oil, 2 medium sliced & slit green chilli, 1 teaspoon garam masala powder, 1/2 cup soaked overnight urad dal, 1/2 teaspoon garlic paste',
        make1:'Step 1: To prepare this popular dish, soak sabut urad and rajma overnight in three cups of water. Drain it and pressure cook in 6 cups of water with salt as per taste. This makes the rajma and dal soft.',
        make2:'Step 2: Take a kadhai on medium flame, then heat the oil and add the cumin seeds. Once the cumin seeds crackle, you can add half the ginger-garlic paste and stir for some time. Then add some onions, chopped green chillies and tomato puree. Fry until the mix turns golden. If you are someone who loves the authentic style of Dal Makhani, then we suggest you to use ghee instead of oil.',
        make3:'Step 3: Once the bhuna masala is ready you can add the pressure cooked Rajma and dal, and bring to a boil. If you want your Dal Makhani to be smooth, you can grind the masala first and then add the dal and Rajma.',
        make4:'Step 4: Then add garam masala and salt as per your taste. Stir well and bring to boil, if you think that the dal is too thick, you can add some water. Then add some fresh cream to this recipe and stir well. This will make your Dal Makhani creamy and delicious. Garnish this recipe with fresh cream and freshly chopped coriander leaves.',
        tips:'You can serve this creamy dal makhni with naan, jeera rice and tandoori butter roti. Do not forget to add a dollop of butter or ghee in the bowl while serving. You can accentuate the taste of this recipe by adding one tablespoon of almond paste, which you can prepare with soaked almonds. This will make the dal creamier.'
    },

    {
        name:'Stuffed Kulche',
        img:'assets/alook.jpg',
        ing1:'4 kulcha, 1 teaspoon coriander leaves, 2 tablespoon ghee, 1 teaspoon cumin seeds, salt as required, 1/2 teaspoon chaat masala powder, 1/4 tablespoon amchur powder',
        ing2:'/4 cup finely chopped capsicum (green pepper), 1 teaspoon finely chopped green chillies, 1 teaspoon mustard seeds, 1 tablespoon rice bran oil, 1/2 teaspoon powdered black pepper, 2 tablespoon tomato ketchup, 1 teaspoon green chutney',
        make1:'Heat a pan on medium heat with 1 tbsp rice bran oil. Add the mustard seeds and cumin seeds and wait until they crackle. Add the capsicum, onions, tomatoes , green chillis, ginger, salt, black pepper powder and sautee for 3-4 mins. Set the mixture aside in mixing bowl and let it cool down for 5 mins.',
        make2:'Add the grated paneer to the vegetables, chat masala powder, 1 tbsp tomato ketchup, amchur powder, chopped coriander and salt, mix together very well.',
        make3:'On the plain side of the kulcha, spread half the prepared paneer and vegetable mixture evenly and place another kulcha on top. Grill on low heat with little bit of ghee, until golden brown on both sides and crisp.',
        make4:'Cut into quarters and serve warm with ketchup and green chutney.',
        tips:false
    },

    {
        name:'Kadhai Mushroom',
        img:'assets/kmush.jpg',
        ing1:'250 gm button mushroom, 4 onion 1-1/2 teaspoon garlic paste, 1 capsicum (green pepper), 1/2 cup water, 1/2 teaspoon garam masala powder, 1-1/2 tablespoon cilantro, 2 tablespoon refined oil, 1-1/2 tablespoon coriander seeds, 2 clove, 1/2 teaspoon fenugreek seeds mace as required ,1/2 teaspoon turmeric',
        ing2:'2 bay leaf, 1-1/2 teaspoon ginger paste, 4 tomato, 2 green chilli, salt as required, 1-1/2 ginger, 1 teaspoon dried fenugreek leaves, 2 red chilli, 1/2 tablespoon peppercorns, 2 green cardamom, 1 cinnamon, 1 teaspoon cumin seeds',
        make1:'Take a non-stick pan and place it on medium flame. Add whole red chillies, coriander seeds, peppercorns, cloves, green cardamom, fenugreek seeds, cinnamon, mace and cumin seeds to the pan and dry roast them. After this, add these ingredients to a blender jar and grind them to a fine powder. In a separate pan, add oil along with button mushrooms and place it on medium flame. Stir fry the mushrooms for a while.',
        make2:'Chop the onions, tomatoes, capsicums, green chillies, ginger and cilantro in a bowl. Now, take a heavy-bottomed kadhai, add oil in it and heat it on medium flame. Add bay leaves along with onions and saute for a while until the onions turn translucent. After this, add ginger and garlic paste and let it cook for 2 to 3 minutes. Add chopped tomatoes, green chillies along with ground masala, turmeric and mix properly. Stir for a while.',
        make3:'Add chopped capsicum and saute it for 2 minutes. Now, add salt according to your taste followed by garam masala powder. Mix properly and then add water. Let it cook for a while and then add stir-fried mushroom. Cover the kadhai with a lid and let it cook for 5 minutes. Cut the ginger into juliennes and garnish the kadhai mushroom along with dried fenugreek leaves and chopped coriander leaves. Serve hot with chapatis or rice.',
        make4:false,
        tip:false
    },

    {
        name:'Pav Bhaji',
        img:'assets/pavb.jpg',
        ing1:'4 medium mashed,boiled potato 2 medium chopped onion, 1/2 cup chopped cauliflower, 1 cup shelled, blanched peas, 3 tablespoon refined oil, salt as required, 8 pav, 2 teaspoon garlic paste, 1/4 cup green beans',
        ing2:'4 medium chopped tomato, 1 chopped, de seeded capsicum ( green pepper), 1/4 cup chopped carrot, 1/2 tablespoon ginger paste, 2 chopped green chilli, 25 gm melted butter, 1 medium lemon wedges, 2 teaspoon pav bhaji masala',
        make1:'Blanch the peas, cauliflower florets, carrots and beans. Alternately, you can also boil them with a little water in the pressure cooker. Drain and mash coarsely. Heat oil in a pan and add three fourth quantity of onions. Sauté till light golden in colour. Add green chillies and ginger-garlic paste. Stir-fry for half a minute and then add pav bhaji masala along with chopped capsicum, and stir fry for a minute.',
        make2:'Ensure that you have finely chopped the tomatoes. If they have tough skin, chop them after removing the skin or grate them. Add tomatoes, salt and cook on medium heat for three to four minutes, stirring continuously or till oil separates from the masala. Add mashed peas, cauliflower, potatoes and 2 cups of water. Bring it to a boil and simmer for ten minutes, pressing with the back of the spoon a few times, till all the vegetables are completely mashed and blended together.',
        make3:'Heat half of the butter in a thick-bottomed pan or a Tawa. Slice pav horizontally into two and pan fry in butter for half a minute, pressing two or three times or till pav is crisp and light brown. Garnish the bhaji with chopped coriander leaves, remaining butter and serve hot with pav accompanied with remaining chopped onion and lemon wedges. You can add finely chopped green chillies to the bhaji to make it spicier. You can also add an extra teaspoon of red chilli powder while cooking the bhaji for that extra colour or spice.',
        make4:false,
        tip:'You can give your own fusion twist to this delectable vegetarian recipe by garnishing it with some grated cheese and sprinkle some red chilli flakes. You can also garnish Pav Bhaji with chopped onions and green chilies. If you prefer a darker Pav Bhaji, add Kashmiri red chilli powder while cooking.'
    },

    {
        name:'Veg Briyani',
        img:'assets/vb.jpg',
        ing1:'2 cup boiled rice, 1/2 cup peas, 2 tomato, 3 teaspoon pav bhaji masala, 1 teaspoon red chilli powder, 1 teaspoon cumin seeds, 1 teaspoon lemon juice, 1/2 teaspoon garlic paste, 1 tablespoon refined oil, 1 potato',
        ing2:'1/2 cup carrot, 1 capsicum (green pepper), salt as required, 1 teaspoon powdered turmeric, 1 onion, 1 bunch coriander leaves, 1/2 teaspoon ginger paste, 1/4 cup water, 1 tablespoon butter',
        make1:'Heat oil in a pan. Once hot, add jeera seeds and let them sizzle. To this, add chopped onions and fry until translucent. Add ginger garlic paste and fry till the pungent smell subsides. Add tomatoes and cook till tomatoes turn soft.',
        make2:'Add all the spice powders(including salt) along with potato and water. Mix well. Turn your flame to low and cook till oil separates from sides.',
        make3:'Add carrots, capsicum and green peas to this mixture. Mix all the ingredients and cook for 2-3 mins. Add cooked rice to this mixture and ensure all the ingredients are combined well.',
        make4:'Add chopped coriander. Off the flame and squeeze lime while serving. Team this spicy pulao with any mild or simple raitha.',
        tip:false
    },

    {
        name:'Soya Chaap',
        img:'assets/soyac.jpg',
        ing1:'300 gm chopped into cubes soya chaap, 2 inch cinnamon stick, 5 gm crushed lightly green cardamom, 1 gm bay leaf, 2 medium chopped onion, salt as required, 1-3/4 teaspoon fennel seeds powder, handful coriander leaves',
        ing2:'2 tablespoon vegetable oil, 1 gm crushed lightly black cardamom, 3 gm clov,e 1-1/2 gm powdered kashmiri red chilli, 1-1/4 teaspoon dried ginger powder, 120 ml beaten yoghurt (curd), 1 teaspoon garam masala powder',
        make1:'Heat oil in a kadhai and then add soya chaap. Fry them until they turn golden brown in color. Once done, transfer them to an absorbent paper to drain excess oil.',
        make2:'In the same kadhai, add black cardamom, green cardamom, bay leaf, cloves, and cinnamon stick. Saute for 2-3 mins. Then add onions, and saute till they turn golden brown in color. Now, add 1 tbsp water and stir to mix well. Cook for at least 2 more minutes.',
        make3:'Add red chili and dried ginger powder. Stir to mix well and then cook for 2 mins. Then add 2 tbsp of water and mix well. Lower the gas flame and pour lightly beaten yogurt. Stir so that the yogurt doesn not curdle. Now, add salt and cook for 5 minutes.',
        make4:'Once done, add fennel powder followed by soya chaap. Mix well and then add 1 1/2 cups of hot water. Cook for 5 minutes and then add in garam masala. Cook for 2 mins and check if the soya chaap masala is ready. If the curry is thick, add water and cook for a while.',
        tip:false
    },

    {
        name:'Kadhai Panner',
        img:'assets/kp.jpg',
        ing1:'250 gm paneer4 tomato1 medium chopped into cubes capsicum ( green pepper)1/2 cup fresh cream1/4 teaspoon powdered turmeric1 1/2 tablespoon garlic paste3 tablespoon ghee1 teaspoon coriander powder1 handful coriander leaves',
        ing2:'2 medium chopped onion 5 medium green chilli 1 teaspoon kasoori methi powder 1 teaspoon garam masala powder 2 teaspoon ginger paste 1/2 cup water salt as required 2 teaspoon red chilli powder',
        make1:'To make this easy recipe, heat ghee in a pan and add chopped onions. Pan-fry the onions until aromatic and light golden brown. Grind tomatoes in a grinder to make a puree and pour in the pan. Cook till masala leaves the sides of the pan or ghee floats around the sides.',
        make2:'Stir the mixture well and add ginger-garlic paste. Now, add in the spices-red chilli powder, garam masala, coriander powder, salt and turmeric powder. Add the cubed capsicum and the baby onions and some water to make a smooth gravy. Cook for about 2 minutes.',
        make3:'Now, add paneer and Kasuri methi into the pan and let it cook on a medium flame for another 4-5 minutes. Now, stir in the fresh cream gently. Garnish with some green chillies and coriander leaves and serve hot!',
        make4:false,
        tip:false
    },

    {
        name:'Stuffed Capsicum',
        img:'assets/sc.png',
        ing1:'10 capsicum (green pepper) 1/2 teaspoon turmeric 1/2 teaspoon salt 1/2 teaspoon garam masala powder 8 tablespoon ghee water as required',
        ing2:'1/2 teaspoon dry mango powder 4 tablespoon peas 4 potato 1 teaspoon red chilli powder 2 onion',
        make1:'Chop the onions finely and keep them aside. Take a pressure cooker, keep it on medium flame and add enough water to cover the potatoes. Cook for two whistles and take out the potatoes once done.Let the potatoes cool down and then peel them. Keep them aside until needed further.',
        make2:'In a pan kept on medium flame, add enough water and fresh peas in it. Bring the mixture to boil for 3 to 4 minutes or until they get tender. Keep them aside. Now add capsicum in the same pan and boil them in water. Once the capsicum gets slightly tender, remove the capsicum from the pan and keep it aside.',
        make3:'Take a bowl and transfer the boiled potatoes in it. Mash the potatoes using a spatula. Take a frying pan, keep it on medium flame and heat ghee in it. Once the ghee is heated, saute the chopped onions in it until golden brown in color.',
        make4:'Now cut the capsicum from the top and remove all the seeds from inside. Add the stuffing in capsicum properly. Take a deep bottomed pan, keep it on medium flame and heat ghee in it. Once the ghee is hot enough, fry the stuffed capsicum in the ghee',
        tip:false
    },

    {
        name:'Pizza Parantha',
        img:'assets/pizzap.jpg',
        ing1:'1 cup wheat flour salt as required 1/2 cup mozzarella cheese 1 tablespoon pizza sauce',
        ing2:'2 tablespoon refined oil powdered black pepper as require  1/2 cup mixed vegetable  water as required',
        make1:'To prepare this main dish recipe, take a bowl and mix together wheat flour, salt and flax seeds. Pour water in the bowl and knead a stiff dough. Once done, cover it and set aside for some time.',
        make2:'Now, take a small bowl and mix together mozzarella cheese along with mixed vegetables. Sprinkle salt and black pepper powder and toss it well. Next, take the dough and divide it into two parts. Shape them in the form of rounds and gently press these balls between your palms. Using a rolling pin, roll these out thinly.',
        make3:'On one rolled out roti, apply pizza sauce and add the cheese-vegetable mix in the center. Cover it with the other roti and seal the edges with water.',
        make4:'Now, heat a pan over medium flame and place the stuffed paratha over it. When you see small rounds rising on the upper side, flip it to the other side. Let that side cook as well and apply refined oil on the upper side. Now, flip it again and apply oil on the upper side. Let the down side become golden-brown in color and flip it again. Cook both the sides well. Once done, take it off the flame and cut into slices ans serve it hot to enjoy!',
        tip:false
    },
    {
        name:'Panner Butter Masala',
        img:'assets/pbm.jpg',
        ing1: '250 gm paneer 1/2 teaspoon garlic paste 1 1/2 tablespoon cashew nut paste 3 tablespoon fresh cream 2 tablespoon butter 1 teaspoon kasoori methi powder 1 teaspoon chaat masala powder ',
        ing2:'1 cup tomato puree1/2 teaspoon ginger past 1/2 teaspoon red chilli powde 1 tablespoon ghe salt as require 1/2 teaspoon honey',
        make1:'To prepare this easy paneer recipe, take a pan and melt ghee in it. Once the ghee is melted, add ginger garlic paste and saute these ingredients for half a minute. Then add tomato puree to it. Stir well and then add cashew nut paste along with red chilli powder and salt. Mix well and cook for 2 minutes.',
        make2:'Now, add honey, kasoori methi powder, butter in the gravy and mix well. Cook for 2-3 minutes and then add paneer pieces to it. Stir gently and coat the gravy well over the paneer pieces.',
        make3:'Add fresh cream (keep 1 tbsp aside) in the gravy along with 1/2 tsp chaat masala. Cook for 2-3 minutes. Your Paneer Butter Masala is ready! Garnish with remaining fresh cream and chaat masala. Serve Paneer Butter Masala hot with paratha, rotis or rice!',
        make4:false,
        tip:'Homemade paneer works best for this recipe. If you are using store-bought paneer, try to soak it in warm water for 10-15 minutes. If you have more time, add 1/2 cup chopped onion and 1/2 cup chopped tomatoes in the first step and then blend the mixture. Strain and blend the residue again in the blender while preparing the gravy for enhanced smoothness. If you prefer a spicier gravy, add 2 tsp green chilli paste or extra red chilli powder.'
    }

]