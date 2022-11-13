import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import sortApplications from "./data/Application";
import moment from "moment";


const initialState = {
    applications: sortApplications,
    applicationsView: [],
    calendary:[],
    nameMonth:['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    month: moment(),
    
};

export const ApplicationContext = createContext();

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState)
    value.handleDropdown = () => {
        dispatch({type:'HANDLE_DROPDOWN'})
    }

    value.getCalendary = () => {
        dispatch({type:'GET_CALENDARY'})
    }
    value.addApplicationsOnCalenadry = () => {
        dispatch({type:'ADD_APPLICATIONS_ON_CALENDARY'})
    }
    value.nextMonth = () =>{
        dispatch({type:'NEXT_MONTH'})
    }
    value.previousMonth = () =>{
        dispatch({type:'PREVIOUS_MONTH'})
    }
    value.setApplicationsView = (count) =>{
        dispatch({type:'SET_APPLICATIONS_VIEW', payload: count})
    }
    value.cancelApplication = (applicationId) => {
        dispatch({type:'CANCEL_APPLICATION', payload: applicationId})
    }
    

    return (
        <ApplicationContext.Provider value={value}>
            {children}
        </ApplicationContext.Provider>
    )

}