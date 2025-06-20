import Logo from '../icons/logo';

export default function Header() {
    return (
        <header className="justify-center items-center p-4 bg-primary w-full mx-auto hidden sm:flex">
            <Logo className='h-20 w-20 sm:h-30 sm:w-30'/>
            <h1 className="text-6xl font-bold text-fg-primary hidden lg:block">AD ASTRA BLOG</h1>
        </header>
    );
}