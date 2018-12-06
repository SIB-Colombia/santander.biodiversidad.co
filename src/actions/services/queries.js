import gql from "graphql-tag";

const GroupListFragment = {
    children: gql`
    fragment children on GrupoBiologicoType {
        id
        nombre
        grupoBiologicoHijos {
            id
            nombre
            grupoBiologicoHijos {
                id
                nombre
                grupoBiologicoHijos {
                    id
                    nombre
                }
            }
        }
    }
`,
}

export const GROUPS_LIST = gql`
query groupList {
    animnales: grupoBiologico(id: 1) {
    ...children
    }
    plantas: grupoBiologico(id: 24) {
    ...children
    }
    hongos: grupoBiologico(id: 37) {
    ...children
    }
    algas: grupoBiologico(id: 41) {
    ...children
    }
    liquenes: grupoBiologico(id: 46) {
    ...children
    }
}
    ${GroupListFragment.children}
`