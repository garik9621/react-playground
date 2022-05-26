import { useDispatch, useSelector } from 'react-redux';
import { GITHUB_LOGIN } from '../..';
import { selectUser, fetchUser } from '../../features/user/userSlice';
import { AppDispatch } from '../../store';
import './About.css';

export const About: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const user = useSelector(selectUser);

	if (!user.isLoaded) {
		dispatch(fetchUser(GITHUB_LOGIN));
	}

	return (
		<div className="About">
			<h1>About</h1>

			<div className="row">
				<div className="col-6">
					{user?.avatar_url ? (
						<p className="About-img">
							<img src={user.avatar_url} alt={GITHUB_LOGIN} />
						</p>
					) : (
						''
					)}

					<p>
						<b>Name: </b>
						{user.name || GITHUB_LOGIN}
					</p>

					{user?.html_url ? (
						<p>
							<b>Gitub: </b>
							<a href={user.html_url}> {user?.login || 'account'} </a>
						</p>
					) : (
						''
					)}
				</div>

				<div className="col-6">map</div>
			</div>
		</div>
	);
};
