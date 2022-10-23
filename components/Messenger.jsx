import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';

const Messenger = () => {
    return (
        <div>
            {
                typeof window !== 'undefiend' && (
                    <MessengerCustomerChat
                        pageId="100044432706390"
                        appId="423046036666195"
                      
                    />
                )
            }
        </div>
    );
};

export default Messenger;