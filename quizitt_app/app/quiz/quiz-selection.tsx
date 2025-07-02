import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { quizAPI } from '../../services/api';
import { ProtectedRoute } from '../../components/ProtectedRoute';

interface Chapter {
  chapter_id: number;
  chapter_name: string;
}

interface Subject {
  name: string;
  color: string;
  api: () => Promise<any>;
}

const subjects: Subject[] = [
  {
    name: 'Physics',
    color: '#E92125',
    api: quizAPI.getPhysicsChapters,
  },
  {
    name: 'Chemistry',
    color: '#6B96E6',
    api: quizAPI.getChemistryChapters,
  },
  {
    name: 'Biology',
    color: '#54C025',
    api: quizAPI.getBiologyChapters,
  },
  {
    name: 'Mathematics',
    color: '#FFC100',
    api: quizAPI.getMathsChapters,
  },
];

export default function QuizSelection() {
  const router = useRouter();
  const { user } = useAuth();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubjectSelect = async (subject: Subject) => {
    setSelectedSubject(subject.name);
    setLoading(true);
    
    try {
      const response = await subject.api();
      setChapters(response.data);
    } catch (error) {
      console.error('Error fetching chapters:', error);
      Alert.alert('Error', 'Failed to load chapters. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChapterSelect = (chapter: Chapter) => {
    router.push({
      pathname: '/quiz/subtopic-selection',
      params: {
        subject: selectedSubject,
        chapterId: chapter.chapter_id,
        chapterName: chapter.chapter_name,
      },
    });
  };

  const getSubjectColor = (subjectName: string) => {
    return subjects.find(s => s.name === subjectName)?.color || '#9C73F4';
  };

  return (
    <ProtectedRoute requireAuth={true} requireSurvey={false}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#222B40' }}>
        <ScrollView style={{ flex: 1, padding: 20 }}>
          {/* Header */}
          <View style={{ marginBottom: 30, marginTop: 20 }}>
            <Text style={{
              color: '#FFFFFF',
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              Choose Your Subject
            </Text>
            <Text style={{
              color: '#ABABAB',
              fontSize: 16,
              textAlign: 'center',
              marginTop: 8,
            }}>
              Select a subject to start your quiz journey
            </Text>
          </View>

          {!selectedSubject ? (
            /* Subject Selection */
            <View style={{ gap: 20 }}>
              {subjects.map((subject) => (
                <TouchableOpacity
                  key={subject.name}
                  onPress={() => handleSubjectSelect(subject)}
                  style={{
                    backgroundColor: '#1E2A3A',
                    borderRadius: 15,
                    padding: 20,
                    borderLeftWidth: 5,
                    borderLeftColor: subject.color,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}
                >
                  <Text style={{
                    color: '#FFFFFF',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                    {subject.name}
                  </Text>
                  <Text style={{
                    color: '#ABABAB',
                    fontSize: 14,
                  }}>
                    Tap to explore chapters
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            /* Chapter Selection */
            <View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedSubject(null);
                    setChapters([]);
                  }}
                  style={{
                    backgroundColor: '#1E2A3A',
                    borderRadius: 10,
                    padding: 10,
                    marginRight: 15,
                  }}
                >
                  <Text style={{ color: '#FFFFFF', fontSize: 16 }}>← Back</Text>
                </TouchableOpacity>
                <Text style={{
                  color: '#FFFFFF',
                  fontSize: 22,
                  fontWeight: 'bold',
                  flex: 1,
                }}>
                  {selectedSubject} Chapters
                </Text>
              </View>

              {loading ? (
                <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 50,
                }}>
                  <ActivityIndicator size="large" color="#9C73F4" />
                  <Text style={{
                    color: '#FFFFFF',
                    marginTop: 10,
                    fontSize: 16,
                  }}>
                    Loading chapters...
                  </Text>
                </View>
              ) : (
                <View style={{ gap: 15 }}>
                  {chapters.map((chapter) => (
                    <TouchableOpacity
                      key={chapter.chapter_id}
                      onPress={() => handleChapterSelect(chapter)}
                      style={{
                        backgroundColor: '#1E2A3A',
                        borderRadius: 12,
                        padding: 18,
                        borderLeftWidth: 4,
                        borderLeftColor: getSubjectColor(selectedSubject),
                      }}
                    >
                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                        <View style={{ flex: 1 }}>
                          <Text style={{
                            color: '#FFFFFF',
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginBottom: 5,
                          }}>
                            Chapter {chapter.chapter_id}
                          </Text>
                          <Text style={{
                            color: '#ABABAB',
                            fontSize: 14,
                            lineHeight: 20,
                          }}>
                            {chapter.chapter_name}
                          </Text>
                        </View>
                        <Text style={{
                          color: getSubjectColor(selectedSubject),
                          fontSize: 18,
                          fontWeight: 'bold',
                        }}>
                          →
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </ProtectedRoute>
  );
}