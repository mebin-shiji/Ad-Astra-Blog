import Logo from '../icons/logo';

export default function Header() {
    return (
        <header className="justify-center items-center p-3 bg-primary w-full mx-auto hidden lg:flex">
            <Logo className='h-10 w-10 sm:h-20 sm:w-20'/>
            <h1 className="text-4xl pt-1 pl-2 font-bold text-fg-primary hidden lg:block">AD ASTRA BLOG</h1>
        </header>
    );
}