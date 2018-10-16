import Link from 'next/link';

export default () => (<nav>
    <div className="nav-wrapper">

        <a href="/" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link href="/test1"><a >Test 1</a></Link>  </li>
            <li><Link href="/test2"><a >Test 2</a></Link>  </li>
        </ul>
    </div>
</nav>);