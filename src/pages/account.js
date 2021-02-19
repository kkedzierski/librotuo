import React from 'react'
import Layout from "../components/layout"
import SEO from '../components/seo'
import { login, isAuthenticated} from '../utils/auth'
import Account from '../components/account/Account'



const account = () => {
    if (!isAuthenticated()){
        login();
        return <p>Ładowanie...</p>;
    }

    return (
        <Layout>
                <SEO title="account"/>
                <Account />
        </Layout>
    )
}

export default account
