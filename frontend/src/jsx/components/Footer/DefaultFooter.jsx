import React from "react";

export default class DefaultFooter extends React.Component {
    render () {
        return(
			<footer class="mdl-mini-footer">
				<div class="mdl-mini-footer__left-section">
					<div class="mdl-logo">
						Copyright Information
					</div>
					<ul class="mdl-mini-footer__link-list">
					<li><a href="#">Help</a></li>
					<li><a href="#">Privacy and Terms</a></li>
					<li><a href="#">User Agreement</a></li>
					</ul>
				</div>
				<div class="mdl-mini-footer__right-section">
					<button class="mdl-mini-footer__social-btn">1</button>
					<button class="mdl-mini-footer__social-btn">2</button>
					<button class="mdl-mini-footer__social-btn">3</button>
				</div>
			</footer>
        );
    }
}

