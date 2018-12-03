export const sidebarVisibility = visibility => (
    {
        type: "SIDEBAR_VISIBILITY",
        payload: {
            sidebarVisible: visibility
        }
    }
)

export const buttonSidebarVisibility = visibility => (
    {
        type: "BUTTON_SIDEBAR_VISIBILITY",
        payload: {
            toggleSidebarVisible: visibility
        }
    }
)
