import React from 'react';
import { Home, ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const BreadcrumbsDefault = props => {
	const { breadCrumbTitle, breadCrumbParent, breadCrumbParent2, breadCrumbParent3, breadCrumbActive } = props;

	return (
		<div
			className={clsx(
				props?.classes?.padding ? props.classes.padding : 'px-24 pt-20 pb-0',
				'flex justify-start items-center'
			)}
		>
			{breadCrumbTitle && (
				<Typography variant="h2" className="text-24 font-medium pr-8">
					{breadCrumbTitle}
				</Typography>
			)}

			<Divider className="mx-12 text-gray bg-white" orientation="vertical" flexItem />

			<Breadcrumbs
				className="pl-8"
				classes={{ ol: 'flex justify-center items-center' }}
				separator={<ChevronRight size={18} />}
			>
				<Link className="flex justify-center items-center" to="/dashboard">
					<Home className="align-top" size={18} />
				</Link>
				{breadCrumbParent && <Typography color="textSecondary">{breadCrumbParent}</Typography>}
				{breadCrumbParent2 && <Typography color="textSecondary">{breadCrumbParent2}</Typography>}
				{breadCrumbParent3 && <Typography color="textSecondary">{breadCrumbParent3}</Typography>}
				<Typography color="textPrimary">{breadCrumbActive}</Typography>
			</Breadcrumbs>
		</div>
	);
};

BreadcrumbsDefault.propTypes = {
	breadCrumbTitle: PropTypes.string,
	breadCrumbParent: PropTypes.string,
	breadCrumbParent2: PropTypes.string,
	breadCrumbParent3: PropTypes.string,
	breadCrumbActive: PropTypes.string
};
BreadcrumbsDefault.defaultProps = {
	breadCrumbTitle: '首頁',
	breadCrumbActive: '首頁'
};

export default BreadcrumbsDefault;
