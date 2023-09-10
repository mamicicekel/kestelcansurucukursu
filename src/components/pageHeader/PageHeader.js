import React from 'react'
import '../pageHeader/PageHeader.css'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function PageHeader({ prevPageName, hasLink, pageName }) {
    return (
        <div className='container'>
            <h1 className='page-name'>{pageName}</h1>
            {hasLink ? (
                <Breadcrumbs aria-label="breadcrumb" color="white">
                    <Link underline="none" color="white">{prevPageName}</Link>
                    <Typography color="#F3BD00">{pageName}</Typography>
                </Breadcrumbs>
            ) : (
                <Typography color="#F3BD00">{pageName}</Typography>
            )}
        </div>
    )
}
