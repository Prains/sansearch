import Overlay from "@/components/ui/Overlay";

const SubscriptionPopup = (isSubscriptionPopup) => {
    return (
        <>
        <Overlay isSubscriptionPopup={isSubscriptionPopup}/>
        </>
    )
}
export default SubscriptionPopup;