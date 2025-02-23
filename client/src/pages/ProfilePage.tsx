import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { useAppSelector } from '@/store/hooks';
import { format, parseISO } from 'date-fns';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const user = useAppSelector(state => state.auth.user);
    const router = useNavigate()

    useEffect(()=>{
        if(!user||!user._id){
            router("/")
        }
    }, [user, router])

    const capitalizeFirstLetter = (string: string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const formatDateString = (dateString: string) => {
        if (!dateString) return 'Not provided';
        try {
            return format(parseISO(dateString), 'PPP');
        } catch (error) {
            console.log(error);
            return 'Invalid date';
        }
    };

    const InfoField = ({ label, value }: { label: string; value: string | number }) => (
        <div className="space-y-1.5 bg-gray-50 p-3 rounded-lg">
            <p className="text-sm font-medium text-gray-500">{label}</p>
            <p className="font-semibold text-gray-900">{value || 'Not provided'}</p>
        </div>
    );

    const SectionTitle = ({ children }: { children: React.ReactNode }) => (
        <h3 className="text-lg font-semibold mb-4 text-blue-600 border-b pb-2">{children}</h3>
    );

    return (
        <div className="container mx-auto p-4 max-w-3xl">
            <Card className="w-full shadow-lg">
                <CardHeader className="border-b bg-gray-50">
                    <CardTitle className="text-2xl text-gray-900">Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 pt-6">

                    <div>
                        <SectionTitle>Personal Information</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InfoField 
                                label="Title" 
                                value={capitalizeFirstLetter(user?.title || '')} 
                            />
                            <InfoField 
                                label="Date of Birth" 
                                value={formatDateString(user?.dateOfBirth as string)} 
                            />
                            <InfoField 
                                label="Email" 
                                value={user?.email || ''} 
                            />
                            <InfoField 
                                label="Phone" 
                                value={user?.phone || ''} 
                            />
                        </div>
                    </div>

                    <div>
                        <SectionTitle>Address Information</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InfoField 
                                label="Home Address" 
                                value={user?.homeAddress || ''} 
                            />
                            <InfoField 
                                label="Years at Address" 
                                value={user?.yearsAtAddress || ''} 
                            />
                        </div>
                    </div>

                    <div>
                        <SectionTitle>Employment & Financial Information</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InfoField 
                                label="Employment Status" 
                                value={capitalizeFirstLetter(user?.employmentStatus || '')} 
                            />
                            <InfoField 
                                label="Financial Assets" 
                                value={user?.financialAssets ? `$${Number(user.financialAssets).toLocaleString()}` : 'Not provided'} 
                            />
                        </div>
                    </div>

                    <div>
                        <SectionTitle>Bio</SectionTitle>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="font-medium text-gray-900">{user?.bio || 'No bio provided'}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfilePage;