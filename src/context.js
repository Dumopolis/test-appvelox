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
    titleHeader: "Домашняя Страница",
    isDropdownView: false,
};

export const ProfileContext = createContext();

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState)
    value.switchTitleHeader = (titleName) => {
        dispatch({type:'SWITCH_TITLE_NAME', payload: titleName})
    }
    value.handleDropdown = () => {
        dispatch({type:'HANDLE_DROPDOWN'})
    }
    value.closeDropdown = () => {
        dispatch({type:'CLOSE_DROPDOWN'})
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
    value.setApplicationsView = (obj) =>{
        dispatch({type:'SET_APPLICATIONS_VIEW', payload: obj})
    }
    value.cancelApplication = (applicationId) => {
        dispatch({type:'CANCEL_APPLICATION', payload: applicationId})
    }
    

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )

}