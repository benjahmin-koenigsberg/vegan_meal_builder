import { createContext, useState, useEffect } from "react";
import { foodData } from "./foodData";
import FoodStats from "../components/FoodStats";

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {

//state
const [modal, setModal] = useState(false)
const [modalContent, setModalContent] = useState('')
const [ food , setFood ] = useState( { dish: '', green: '', bean: '', root: "", grain: '', fat: '', dressing: ''} )
const [foodStats, setFoodStats] = useState({
        green: {
            calories: 0,
            fat: 0,
            protein: 0,
            carbs: 0,
        },
        bean: {
            calories: 0,
            fat: 0,
            protein: 0,
            carbs: 0,
        },
        root: {
            calories: 0,
            fat: 0,
            protein: 0,
            carbs: 0,
        },
        fat: {
            calories: 0,
            fat: 0,
            protein: 0,
            carbs: 0,
        },
        dressing: {
            calories: 0,
            fat: 0,
            protein: 0,
            carbs: 0,
        }
} )


    const updateStats = (e) => {

        const choice = foodData.filter(item => item.name === e.target.value)
        const cals = choice[0].calories
        const carbs = choice[0].carbs
        const fat = choice[0].fat
        const protein = choice[0].protein
        const type = choice[0].type

        setFoodStats( { ...foodStats, [type] : { calories: cals, carbs: carbs, fat: fat, protein: protein } } )
}


const greens_Info = "The calcium in dark green leafy vegetables is more effectively absorbed by the body than that found in cow’s milk. Potassium from greens may be anti-inflammatory and may prevent strokes and heart disease.  Greens can also provide iron and zinc, antioxidants, and magnesium, a nutrient that may lower the risk of a range of health concerns including diabetes, heart disease, and sudden cardiac death.  Green leafy vegetables are the best source of plant-based nitrates. Nitrates from a plant-based diet are not considered harmful. In fact, nitric oxide formed from plant-based nitrate may play a role in the prevention of heart disease and high blood pressure. Eating whole plant foods is likely better for your health than taking supplements.";
const beans_Info = "Beans are an inexpensive yet nutrient-dense food as they are a rich source of bioactive compounds including polysaccharides, oligosaccharides, protein, polyphenols/phytochemicals, and several vitamins and minerals. Pulses are mainly comprised of carbohydrate, making up over half of the total weight, between 55 and 65%.";
const roots_Info = "Root vegetables are characterized by several health-promoting effects, including the regulation of metabolic parameters (glucose level, lipid profile, and blood pressure), antioxidant potential, prebiotic function, and anti-cancer properties";
const grains_Info = `Whole-grain foods are good choices for a nutritious diet. Whole grains provide fiber, vitamins, minerals and other nutrients.
Whole-grain foods help control of cholesterol levels, weight and blood pressure. These foods also help lower the risk of diabetes, heart disease and other conditions.`
const fats_Info = `Nuts and seeds are good sources of protein, healthy fats, fibres, vitamins and minerals. Nuts and seeds regulate body weight as their fats are not fully absorbed and they regulate food intake. Nuts and seeds contain unsaturated fats and other nutrients that provide protective effects against heart disease and diabetes.`;
const dressings_Info = `– Adding flavour helps motivate you to eat healthy salads regularly by making them more enjoyable. – Adding fat to salad allows your body to process the fat-soluble vitamins`

//functions

const closeModal = () => {
    setModal(false)
}


const choiceCategory = foodData.filter(()=>{} )







const handleModal = (e) => {
setModal(true)
const id = e.target.id;
if (id === 'greens') setModalContent(greens_Info)
if (id === 'beans') setModalContent(beans_Info)
if (id === 'roots') setModalContent(roots_Info)
if (id === 'grains') setModalContent(grains_Info)
if (id === 'fats') setModalContent(fats_Info)
if (id === 'dressings') setModalContent(dressings_Info)
}


    return (
        <FoodContext.Provider
            value={{
                food,
                setFood,
                foodData,
                modal,
                setModal,
                closeModal,
                handleModal,
                modalContent,
                setModalContent,
                foodStats,
                setFoodStats,
                updateStats
            }}>
            {children}
        </FoodContext.Provider>
    );

}

export default FoodContext;
