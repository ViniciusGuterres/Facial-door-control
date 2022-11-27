import React, { useState } from "react";

// Components
import BreadCrumb from "../components/BreadCrumb";
import Layout from '../components/Layout';
import Notification from '../components/Notification';

export default function reports() {

    return (
        <Layout>
            <div style={{ width: '100%' }}>
                <BreadCrumb
                    name='Relatórios de acessos'
                    icon='faPen'
                />

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    
                </div>
            </div>
        </Layout>
    )
}