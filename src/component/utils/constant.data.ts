import HomeIcon from "../../../public/Icons/Home"
import AnalyticsIcon from "../../../public/Icons/AnalyticsIcon"
import CashIcon from "../../../public/Icons/Cash"
import PeopleIcon from "../../../public/Icons/PeopleIcon"
import WidgetIcon from "../../../public/Icons/Widgets"

export const NavLinks = [
    {
	name: 'Home', link: '/', icon: HomeIcon
},
    {
	name: 'Analytics', link: '/analytics', icon: AnalyticsIcon
},
    {
	name: 'Revenue', link: '/revenue', icon: CashIcon
},
    {
	name: 'CRM', link: '/crm', icon:PeopleIcon
},
    {
	name: 'Apps', link: '/apps', icon: WidgetIcon
},
]

export const filterOptions = ["Today", "Last 7 days", "This month", "Last 3 months"];
export const transactionTypes = ["Store transaction", "get tipped", "withdrawals", "chargebacks", "cashbacks", 'refer & Earn'];    
export const transactionStatuses = ["Successful", "Pending", "Failed"];