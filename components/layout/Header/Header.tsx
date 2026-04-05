import Link from 'next/link';
import Icon from '@/assets/Icon.svg';
import accIcon from '@/assets/account-svgrepo-com.svg';
import walletIcon from '@/assets/crypto-wallet-bitcoin-icon.svg';
import Image from 'next/image';
import classes from './Header.module.css';

export default function Header(){

    return(
    <header className={classes.header}>
        <div className={classes.logoArea}>
            <Link href = "/">
                <Image className={classes.logoImg} src ={Icon} alt = "company logo"/>
            </Link>
            TradeForge
        </div>
        <div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href = "/markets">Markets</Link>
                    </li>
                    <li>
                        <Link href="/trade">Trade</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className={classes.rightArea}>
            <Link href ="/wallet">
                <Image className={classes.walletlogoImg} src ={walletIcon} alt = "wallet logo"/>
            </Link>
            <Link href ="/account">
                <Image className={classes.acclogoImg} src ={accIcon} alt = "account logo"/>
            </Link>
        </div>
    </header>
    )
}
