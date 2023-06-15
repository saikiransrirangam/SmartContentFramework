import BreadCrumbs from '@zeta/core/components/Breadcrumbs/Index';
import Button from '@zeta/core/components/Buttons/Button';
import Card from '@zeta/core/components/Card/Index';
import CodeBlock from '@zeta/core/components/Code/Index';
import { getSurvey } from '@zeta/data/api';
import { useQuery } from 'react-query';
import { useParams,useNavigate } from 'react-router-dom';

const breadcrumbs = [
  {
    key: 'surveys-list',
    name: 'Survey List',
    href: ``,
    current: false,
    show: true,
  },
  {
    key: 'survey',
    name: 'Survey',
    href: ``,
    current: true,
    show: true,
  },
];

export default function Survey({}: {}) {
  const handlenBreadcrumbClick = page => {};
  const navigate = useNavigate()
  const { id } = useParams();
  const { data: survey, isLoading, isError, error } = useQuery(['survey', id], () => getSurvey(id));
 console.log("data" + survey)
  if (isLoading) {
    return <p>Loading surveys...</p>;
  }

  if (isError) {
    return <p>Error loading surveys:</p>;
  }

  const goToQuestion = (id) => {
    navigate(`/surveys/${id}/questions/1`);
  };

  return (
    <>
      <div style={{ background: '#FDFDFD', minHeight: '100vh' }}>
        <div className="flex pt-10 pb-10 mx-auto max-w-7xl lt-md:px-4 lg:px-8 lt-md:pt-10">
          <main className="w-full">
            <div></div>
            <div className="flex justify-center">
              <BreadCrumbs pages={breadcrumbs} handlenBreadcrumbClick={page => handlenBreadcrumbClick(page)} />
            </div>
              <div className="flex w-full gap-x-5 lt-md:flex-wrap" key={survey._id}>
                <div className="w-full">
                  <Card padding="p-6" margin="my-5">
                    <div className="grid w-full grid-cols-2 mb-5 lt-md:grid-cols-1">
                      <div className="w-full lt-md:mb-5">
                        <h1 className="text-2xl font-semibold capitalize">{survey.title}</h1>
                        <h2 className="text-2xl font-semibold capitalize lt-md:hidden"></h2>
                      </div>
                      <div>
                        <div className="flex items-center justify-end w-full lt-md:justify-between">
                          <h2 className="text-2xl font-semibold capitalize gt-sm:hidden"></h2>
                          <div className="flex flex-col items-end gap-y-2">
                            <div className="text-right w-28 justify-self-end">
                              <Button
                                text={'Start Survey'}
                                showIcon={false}
                                handleClick={() => goToQuestion(survey._id)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="description-panel-header" className="flex justify-between mb-4">
                      <h2 className="text-lg font-semibold">Description</h2>
                    </div>
                    <div className="overflow-scroll-y">
                      <p className="px-4 text-base">{survey.description}</p>
                    </div>
                  </Card>
                </div>
              </div>
            <div className="flex-col hidden w-4/12 mx-auto mt-10 lt-md:flex lt-md:w-full gap-y-5">
                <Button
                  text={'Continue'}
                  showIcon={true}
                  handleClick={() => goToQuestion(survey._id)}
                />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}