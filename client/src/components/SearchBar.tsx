import { useState,useEffect,useParams } from "react";
import {
  Box,
  IconButton,
  InputBase,
  useTheme
} from "@mui/material";
import {
  Search
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween.tsx";
import WidgetWrapper from "./WidgetWrapper.tsx";
import {setUsers} from '../state/index.js'
import Friend from './Friend.tsx'


const SearchBar = ()=>{
    
    const token = useSelector((state) => state.token);
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
  

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  
  const [searchQuery, setSearchQuery] = useState();
  const [filteredData, setFilteredData] = useState([])
  const inputHandle = (e)=>{
    const searchWord = e.target.value;
    setSearchQuery(searchWord);
    }

    useEffect(()=>{
      if(searchQuery!==''){
        const filteredData = users.filter((i)=>{
          return  i.firstName.toLowerCase().includes(searchQuery)||
                  i.lastName.toLowerCase().includes(searchQuery)})
         setFilteredData(filteredData)
      }else {
        setFilteredData([])
      }
    }, [searchQuery])
    

  const getUsers = async () => {
    
   const response = await fetch("http://localhost:3001/users", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setUsers({users:data}))
  };
  
  

    return(
        
        <WidgetWrapper>
        <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Поиск друзей..."
            value={searchQuery}
            onInput={inputHandle} />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
         
          {
            filteredData.map((i,key)=>{
                                      return (
                        <Box display="flex" flexDirection="column" gap="1.5rem" mt='0.25rem'>
                          <Friend
            key={i._id}
            friendId={i._id}
            name={`${i.firstName} ${i.lastName}`}
            userPicturePath={i.picturePath}
          />
                  
                  </Box>    ) })}
             

                
            
          
          </WidgetWrapper>
          
    )
}

export default SearchBar;
