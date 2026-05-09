import PageContainer from "./page-container";
export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-8 text-zinc-400">
            <PageContainer>
                <div className="flex flex-col items-center justify-between gap-4
md:flex-row">
                    <p>© 2026 FitTrack. All rights reserved.</p>
                    <div className="flex items-center gap-6 text-sm">
                        <button>Privacy</button>
                        <button>Terms</button>
                        <button>Contact</button>
                    </div>
                </div>
            </PageContainer>
        </footer>
    );
}
