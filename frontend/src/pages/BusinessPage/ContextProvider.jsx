import MyContext from "./Mycontext";

const ContextProvider = ({ children }) => {
    const tabContentFoodDelievry = [
        { id: "01", name: "Food Delivery Partner", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", },
        { id: "02", name: "Ecom Delivery Partner", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", },
        { id: "03", name: "Grocery Delivery Partner", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 10+", link: "/", },
        { id: "04", name: "Medical Supply Deliveries", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " Less than 10", link: "/", },
        { id: "05", name: "3PL Courier Partners", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: "  45+", link: "/", },
        { id: "06", name: "Regular Courier Delivery Executive", prara: <ul className='list-disc pl-5'><li>Lorem ipsum dolor sit</li> <li>amet Consectetur adipiscing elit</li></ul>, opening: "Current Opening : ", vancant: " 45+", link: "/", }
    ]
    return (

        <MyContext.Provider value={tabContentFoodDelievry}>
            {children}
        </MyContext.Provider>
    )
}
export default ContextProvider;