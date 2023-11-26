'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-forum documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-fe7e1c2cc3abf6a80783e68168c18175f00a68c84980dcfe23fa63698c918de9ead6bfa5535351ae928500c30a20cae4b6c083f9bc5ff504c0e791fafa439893"' : 'data-bs-target="#xs-controllers-links-module-AppModule-fe7e1c2cc3abf6a80783e68168c18175f00a68c84980dcfe23fa63698c918de9ead6bfa5535351ae928500c30a20cae4b6c083f9bc5ff504c0e791fafa439893"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-fe7e1c2cc3abf6a80783e68168c18175f00a68c84980dcfe23fa63698c918de9ead6bfa5535351ae928500c30a20cae4b6c083f9bc5ff504c0e791fafa439893"' :
                                            'id="xs-controllers-links-module-AppModule-fe7e1c2cc3abf6a80783e68168c18175f00a68c84980dcfe23fa63698c918de9ead6bfa5535351ae928500c30a20cae4b6c083f9bc5ff504c0e791fafa439893"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-fe7e1c2cc3abf6a80783e68168c18175f00a68c84980dcfe23fa63698c918de9ead6bfa5535351ae928500c30a20cae4b6c083f9bc5ff504c0e791fafa439893"' : 'data-bs-target="#xs-injectables-links-module-AppModule-fe7e1c2cc3abf6a80783e68168c18175f00a68c84980dcfe23fa63698c918de9ead6bfa5535351ae928500c30a20cae4b6c083f9bc5ff504c0e791fafa439893"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fe7e1c2cc3abf6a80783e68168c18175f00a68c84980dcfe23fa63698c918de9ead6bfa5535351ae928500c30a20cae4b6c083f9bc5ff504c0e791fafa439893"' :
                                        'id="xs-injectables-links-module-AppModule-fe7e1c2cc3abf6a80783e68168c18175f00a68c84980dcfe23fa63698c918de9ead6bfa5535351ae928500c30a20cae4b6c083f9bc5ff504c0e791fafa439893"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-2938905e0c68d462aff6be990147b526d7f7a2bb596a75b54ab368128528d084cd1e88d85b82c0383bc55c6a49068ac50b9ed82fac279a57d66626d4da7181bf"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-2938905e0c68d462aff6be990147b526d7f7a2bb596a75b54ab368128528d084cd1e88d85b82c0383bc55c6a49068ac50b9ed82fac279a57d66626d4da7181bf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2938905e0c68d462aff6be990147b526d7f7a2bb596a75b54ab368128528d084cd1e88d85b82c0383bc55c6a49068ac50b9ed82fac279a57d66626d4da7181bf"' :
                                            'id="xs-controllers-links-module-AuthModule-2938905e0c68d462aff6be990147b526d7f7a2bb596a75b54ab368128528d084cd1e88d85b82c0383bc55c6a49068ac50b9ed82fac279a57d66626d4da7181bf"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-2938905e0c68d462aff6be990147b526d7f7a2bb596a75b54ab368128528d084cd1e88d85b82c0383bc55c6a49068ac50b9ed82fac279a57d66626d4da7181bf"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-2938905e0c68d462aff6be990147b526d7f7a2bb596a75b54ab368128528d084cd1e88d85b82c0383bc55c6a49068ac50b9ed82fac279a57d66626d4da7181bf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2938905e0c68d462aff6be990147b526d7f7a2bb596a75b54ab368128528d084cd1e88d85b82c0383bc55c6a49068ac50b9ed82fac279a57d66626d4da7181bf"' :
                                        'id="xs-injectables-links-module-AuthModule-2938905e0c68d462aff6be990147b526d7f7a2bb596a75b54ab368128528d084cd1e88d85b82c0383bc55c6a49068ac50b9ed82fac279a57d66626d4da7181bf"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogCategoryModule.html" data-type="entity-link" >BlogCategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BlogCategoryModule-6aeb703fd1f5549f6aaf5d0c1449348087de4ebb7fdb037806fbf3fe1fd802d2d3c89ab13f7da3b838a824eab8ad4be5ac686bc5757390916e162d3946b10c64"' : 'data-bs-target="#xs-controllers-links-module-BlogCategoryModule-6aeb703fd1f5549f6aaf5d0c1449348087de4ebb7fdb037806fbf3fe1fd802d2d3c89ab13f7da3b838a824eab8ad4be5ac686bc5757390916e162d3946b10c64"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BlogCategoryModule-6aeb703fd1f5549f6aaf5d0c1449348087de4ebb7fdb037806fbf3fe1fd802d2d3c89ab13f7da3b838a824eab8ad4be5ac686bc5757390916e162d3946b10c64"' :
                                            'id="xs-controllers-links-module-BlogCategoryModule-6aeb703fd1f5549f6aaf5d0c1449348087de4ebb7fdb037806fbf3fe1fd802d2d3c89ab13f7da3b838a824eab8ad4be5ac686bc5757390916e162d3946b10c64"' }>
                                            <li class="link">
                                                <a href="controllers/BlogCategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogCategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BlogCategoryModule-6aeb703fd1f5549f6aaf5d0c1449348087de4ebb7fdb037806fbf3fe1fd802d2d3c89ab13f7da3b838a824eab8ad4be5ac686bc5757390916e162d3946b10c64"' : 'data-bs-target="#xs-injectables-links-module-BlogCategoryModule-6aeb703fd1f5549f6aaf5d0c1449348087de4ebb7fdb037806fbf3fe1fd802d2d3c89ab13f7da3b838a824eab8ad4be5ac686bc5757390916e162d3946b10c64"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BlogCategoryModule-6aeb703fd1f5549f6aaf5d0c1449348087de4ebb7fdb037806fbf3fe1fd802d2d3c89ab13f7da3b838a824eab8ad4be5ac686bc5757390916e162d3946b10c64"' :
                                        'id="xs-injectables-links-module-BlogCategoryModule-6aeb703fd1f5549f6aaf5d0c1449348087de4ebb7fdb037806fbf3fe1fd802d2d3c89ab13f7da3b838a824eab8ad4be5ac686bc5757390916e162d3946b10c64"' }>
                                        <li class="link">
                                            <a href="injectables/BlogCategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogCategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link" >BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BlogModule-92bbabf57129fccc3f98d375a7ac6a4e7a932e25286ea0527a4f7a0a0ecd340271dd9e4933a6fb994a64cbde8f871378f06daa54646153a0778fa4117cbb783b"' : 'data-bs-target="#xs-controllers-links-module-BlogModule-92bbabf57129fccc3f98d375a7ac6a4e7a932e25286ea0527a4f7a0a0ecd340271dd9e4933a6fb994a64cbde8f871378f06daa54646153a0778fa4117cbb783b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BlogModule-92bbabf57129fccc3f98d375a7ac6a4e7a932e25286ea0527a4f7a0a0ecd340271dd9e4933a6fb994a64cbde8f871378f06daa54646153a0778fa4117cbb783b"' :
                                            'id="xs-controllers-links-module-BlogModule-92bbabf57129fccc3f98d375a7ac6a4e7a932e25286ea0527a4f7a0a0ecd340271dd9e4933a6fb994a64cbde8f871378f06daa54646153a0778fa4117cbb783b"' }>
                                            <li class="link">
                                                <a href="controllers/BlogController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BlogModule-92bbabf57129fccc3f98d375a7ac6a4e7a932e25286ea0527a4f7a0a0ecd340271dd9e4933a6fb994a64cbde8f871378f06daa54646153a0778fa4117cbb783b"' : 'data-bs-target="#xs-injectables-links-module-BlogModule-92bbabf57129fccc3f98d375a7ac6a4e7a932e25286ea0527a4f7a0a0ecd340271dd9e4933a6fb994a64cbde8f871378f06daa54646153a0778fa4117cbb783b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BlogModule-92bbabf57129fccc3f98d375a7ac6a4e7a932e25286ea0527a4f7a0a0ecd340271dd9e4933a6fb994a64cbde8f871378f06daa54646153a0778fa4117cbb783b"' :
                                        'id="xs-injectables-links-module-BlogModule-92bbabf57129fccc3f98d375a7ac6a4e7a932e25286ea0527a4f7a0a0ecd340271dd9e4933a6fb994a64cbde8f871378f06daa54646153a0778fa4117cbb783b"' }>
                                        <li class="link">
                                            <a href="injectables/BlogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryModule-1a36a33421f406fa561bfdf563dea124b403ba0d3cef8568c5525f6c86473e6d33180780d79644ada937b718b46bcb84836cd36e338e2573910ec0dda403e3dc"' : 'data-bs-target="#xs-controllers-links-module-CategoryModule-1a36a33421f406fa561bfdf563dea124b403ba0d3cef8568c5525f6c86473e6d33180780d79644ada937b718b46bcb84836cd36e338e2573910ec0dda403e3dc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-1a36a33421f406fa561bfdf563dea124b403ba0d3cef8568c5525f6c86473e6d33180780d79644ada937b718b46bcb84836cd36e338e2573910ec0dda403e3dc"' :
                                            'id="xs-controllers-links-module-CategoryModule-1a36a33421f406fa561bfdf563dea124b403ba0d3cef8568c5525f6c86473e6d33180780d79644ada937b718b46bcb84836cd36e338e2573910ec0dda403e3dc"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryModule-1a36a33421f406fa561bfdf563dea124b403ba0d3cef8568c5525f6c86473e6d33180780d79644ada937b718b46bcb84836cd36e338e2573910ec0dda403e3dc"' : 'data-bs-target="#xs-injectables-links-module-CategoryModule-1a36a33421f406fa561bfdf563dea124b403ba0d3cef8568c5525f6c86473e6d33180780d79644ada937b718b46bcb84836cd36e338e2573910ec0dda403e3dc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-1a36a33421f406fa561bfdf563dea124b403ba0d3cef8568c5525f6c86473e6d33180780d79644ada937b718b46bcb84836cd36e338e2573910ec0dda403e3dc"' :
                                        'id="xs-injectables-links-module-CategoryModule-1a36a33421f406fa561bfdf563dea124b403ba0d3cef8568c5525f6c86473e6d33180780d79644ada937b718b46bcb84836cd36e338e2573910ec0dda403e3dc"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FaqCategoryModule.html" data-type="entity-link" >FaqCategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' : 'data-bs-target="#xs-controllers-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' :
                                            'id="xs-controllers-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' }>
                                            <li class="link">
                                                <a href="controllers/FaqCategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqCategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' : 'data-bs-target="#xs-injectables-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' :
                                        'id="xs-injectables-links-module-FaqCategoryModule-7c54985866d97c7c255672af3837dd2409d87eee01150e762aa9088c21f1832d7fc1356b6f48a1be4ac5d654f0c79c3709f8e82e4d0a90758e2c2de0fe98d7d6"' }>
                                        <li class="link">
                                            <a href="injectables/FaqCategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqCategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FaqModule.html" data-type="entity-link" >FaqModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FaqModule-bcade605bc9a5bd80cf3146468627ca8df01ff162caf79d9fbfd6e69e06534a783a9b7bcd894f6df7a18914bcb10711abe120e9bc10817c03b83bdeaddc31a50"' : 'data-bs-target="#xs-controllers-links-module-FaqModule-bcade605bc9a5bd80cf3146468627ca8df01ff162caf79d9fbfd6e69e06534a783a9b7bcd894f6df7a18914bcb10711abe120e9bc10817c03b83bdeaddc31a50"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FaqModule-bcade605bc9a5bd80cf3146468627ca8df01ff162caf79d9fbfd6e69e06534a783a9b7bcd894f6df7a18914bcb10711abe120e9bc10817c03b83bdeaddc31a50"' :
                                            'id="xs-controllers-links-module-FaqModule-bcade605bc9a5bd80cf3146468627ca8df01ff162caf79d9fbfd6e69e06534a783a9b7bcd894f6df7a18914bcb10711abe120e9bc10817c03b83bdeaddc31a50"' }>
                                            <li class="link">
                                                <a href="controllers/FaqController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FaqModule-bcade605bc9a5bd80cf3146468627ca8df01ff162caf79d9fbfd6e69e06534a783a9b7bcd894f6df7a18914bcb10711abe120e9bc10817c03b83bdeaddc31a50"' : 'data-bs-target="#xs-injectables-links-module-FaqModule-bcade605bc9a5bd80cf3146468627ca8df01ff162caf79d9fbfd6e69e06534a783a9b7bcd894f6df7a18914bcb10711abe120e9bc10817c03b83bdeaddc31a50"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FaqModule-bcade605bc9a5bd80cf3146468627ca8df01ff162caf79d9fbfd6e69e06534a783a9b7bcd894f6df7a18914bcb10711abe120e9bc10817c03b83bdeaddc31a50"' :
                                        'id="xs-injectables-links-module-FaqModule-bcade605bc9a5bd80cf3146468627ca8df01ff162caf79d9fbfd6e69e06534a783a9b7bcd894f6df7a18914bcb10711abe120e9bc10817c03b83bdeaddc31a50"' }>
                                        <li class="link">
                                            <a href="injectables/FaqService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuestionModule.html" data-type="entity-link" >QuestionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' : 'data-bs-target="#xs-controllers-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' :
                                            'id="xs-controllers-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' }>
                                            <li class="link">
                                                <a href="controllers/QuestionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' : 'data-bs-target="#xs-injectables-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' :
                                        'id="xs-injectables-links-module-QuestionModule-57caa037d90292091a3fba482a1fe763a35ad58050ba946e44a454b1144f51c5eca2c951b409402dc6f7c6b7172fa99c846354e13a7784b19abb31677213d4a4"' }>
                                        <li class="link">
                                            <a href="injectables/QuestionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-dbc5ccc3db5b7958bebde72582082ac872c4a0f96a7912fc8988eb59cdf5a9f0cce2f9e0864c020037e4d5789e772bfd9187aa097ca3adcb87ad2fc4807051bb"' : 'data-bs-target="#xs-controllers-links-module-UserModule-dbc5ccc3db5b7958bebde72582082ac872c4a0f96a7912fc8988eb59cdf5a9f0cce2f9e0864c020037e4d5789e772bfd9187aa097ca3adcb87ad2fc4807051bb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-dbc5ccc3db5b7958bebde72582082ac872c4a0f96a7912fc8988eb59cdf5a9f0cce2f9e0864c020037e4d5789e772bfd9187aa097ca3adcb87ad2fc4807051bb"' :
                                            'id="xs-controllers-links-module-UserModule-dbc5ccc3db5b7958bebde72582082ac872c4a0f96a7912fc8988eb59cdf5a9f0cce2f9e0864c020037e4d5789e772bfd9187aa097ca3adcb87ad2fc4807051bb"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-dbc5ccc3db5b7958bebde72582082ac872c4a0f96a7912fc8988eb59cdf5a9f0cce2f9e0864c020037e4d5789e772bfd9187aa097ca3adcb87ad2fc4807051bb"' : 'data-bs-target="#xs-injectables-links-module-UserModule-dbc5ccc3db5b7958bebde72582082ac872c4a0f96a7912fc8988eb59cdf5a9f0cce2f9e0864c020037e4d5789e772bfd9187aa097ca3adcb87ad2fc4807051bb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-dbc5ccc3db5b7958bebde72582082ac872c4a0f96a7912fc8988eb59cdf5a9f0cce2f9e0864c020037e4d5789e772bfd9187aa097ca3adcb87ad2fc4807051bb"' :
                                        'id="xs-injectables-links-module-UserModule-dbc5ccc3db5b7958bebde72582082ac872c4a0f96a7912fc8988eb59cdf5a9f0cce2f9e0864c020037e4d5789e772bfd9187aa097ca3adcb87ad2fc4807051bb"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BlogCategoryController.html" data-type="entity-link" >BlogCategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BlogController.html" data-type="entity-link" >BlogController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FaqCategoryController.html" data-type="entity-link" >FaqCategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FaqController.html" data-type="entity-link" >FaqController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/QuestionController.html" data-type="entity-link" >QuestionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/Blog.html" data-type="entity-link" >Blog</a>
                            </li>
                            <li class="link">
                                <a href="classes/BlogCategory.html" data-type="entity-link" >BlogCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBlogCategoryDto.html" data-type="entity-link" >CreateBlogCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBlogDto.html" data-type="entity-link" >CreateBlogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFaqCategoryDto.html" data-type="entity-link" >CreateFaqCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFaqDto.html" data-type="entity-link" >CreateFaqDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateQuestionDto.html" data-type="entity-link" >CreateQuestionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Faq.html" data-type="entity-link" >Faq</a>
                            </li>
                            <li class="link">
                                <a href="classes/FaqCategory.html" data-type="entity-link" >FaqCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtStorage.html" data-type="entity-link" >JwtStorage</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Question.html" data-type="entity-link" >Question</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBlogCategoryDto.html" data-type="entity-link" >UpdateBlogCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBlogDto.html" data-type="entity-link" >UpdateBlogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFaqCategoryDto.html" data-type="entity-link" >UpdateFaqCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFaqDto.html" data-type="entity-link" >UpdateFaqDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateQuestionDto.html" data-type="entity-link" >UpdateQuestionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthCheckGuard.html" data-type="entity-link" >AuthCheckGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlogCategoryService.html" data-type="entity-link" >BlogCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlogService.html" data-type="entity-link" >BlogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FaqCategoryService.html" data-type="entity-link" >FaqCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FaqService.html" data-type="entity-link" >FaqService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionService.html" data-type="entity-link" >QuestionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseTransformInterceptor.html" data-type="entity-link" >ResponseTransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenGuard.html" data-type="entity-link" >TokenGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IErrorBody.html" data-type="entity-link" >IErrorBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemsBody.html" data-type="entity-link" >ItemsBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationMetaInterface.html" data-type="entity-link" >PaginationMetaInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResourceBody.html" data-type="entity-link" >ResourceBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignUpDTO.html" data-type="entity-link" >SignUpDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenStorage.html" data-type="entity-link" >TokenStorage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});