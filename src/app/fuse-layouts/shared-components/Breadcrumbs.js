import React from 'react';
import { Home, ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const renderText = (title, isActive) =>
	isActive ? (
		<Typography color="textPrimary">{title}</Typography>
	) : (
		<Typography color="textSecondary">{title}</Typography>
	);

const BreadcrumbsDefault = props => {
	const { breadCrumbTitle, breadCrumbs } = props;

	return (
		<div
			className={clsx(
				props?.classes?.padding ? props.classes.padding : 'px-24 pt-20 pb-0',
				'flex justify-start items-center'
			)}
		>
			{breadCrumbTitle && (
				<Typography variant="h2" className="text-24 font-medium pr-8 whitespace-no-wrap">
					{breadCrumbTitle}
				</Typography>
			)}

			<Divider className="mx-12 text-gray bg-white" orientation="vertical" flexItem />

			<Breadcrumbs
				className="pl-8"
				classes={{ ol: 'flex justify-start items-center' }}
				separator={<ChevronRight size={18} />}
			>
				<Link className="flex justify-center items-center" to="/dashboard">
					<Home className="align-top" size={18} />
				</Link>
				{breadCrumbs.map(({ to, title, isActive }) =>
					to ? (
						<Link className="flex justify-center items-center" to={to}>
							{renderText(title, isActive)}
						</Link>
					) : (
						renderText(title, isActive)
					)
				)}
			</Breadcrumbs>
		</div>
	);
};

BreadcrumbsDefault.propTypes = {
	breadCrumbTitle: PropTypes.string,
	breadCrumbs: PropTypes.array
};
BreadcrumbsDefault.defaultProps = {
	breadCrumbTitle: '首頁',
	breadCrumbs: [
		{
			title: '首頁',
			isActive: true
		}
	]
};

export default BreadcrumbsDefault;
