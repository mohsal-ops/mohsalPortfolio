import React , {createContext , useState} from 'react'
export const TheSelectedidINProjects = createContext()



export const Context= ({children}) => {
    
    const [SelectedId, setSelectedId] = useState(null)

    
  return (
    <TheSelectedidINProjects.Provider value = {{SelectedId ,setSelectedId}}>
      <div>
        {children}
      </div>
    </TheSelectedidINProjects.Provider>
  )
}

